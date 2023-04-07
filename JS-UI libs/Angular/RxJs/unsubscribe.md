http://www.zephyrfloat.com/floatation

For this question there are two kinds of Observables - finite value and infinite value.

http Observables produce finite (1) values and something like a DOM event listener Observable produces infinite values.

If you manually call subscribe (not using async pipe), then unsubscribe from infinite Observables.

Don't worry about finite ones, RxJs will take care of them.

Sources:

I tracked down an answer from Rob Wormald in Angular's Gitter here.

He states (I reorganized for clarity and emphasis is mine):

if its a single-value-sequence (like an http request) the manual cleanup is unnecessary (assuming you subscribe in the controller manually)

i should say "if its a sequence that completes" (of which single value sequences, a la http, are one)

if its an infinite sequence, you should unsubscribe which the async pipe does for you

Also he mentions in this YouTube video on Observables that "they clean up after themselves..." in the context of Observables that complete (like Promises, which always complete because they are always producing one value and ending - we never worried about unsubscribing from Promises to make sure they clean up XHR event listeners, right?)

Also in the Rangle guide to Angular 2 it reads

In most cases we will not need to explicitly call the unsubscribe method unless we want to cancel early or our Observable has a longer lifespan than our subscription. The default behavior of Observable operators is to dispose of the subscription as soon as .complete() or .error() messages are published. Keep in mind that RxJS was designed to be used in a "fire and forget" fashion most of the time.

When does the phrase "our Observable has a longer lifespan than our subscription" apply?

It applies when a subscription is created inside a component which is destroyed before (or not 'long' before) the Observable completes.

I read this as meaning if we subscribe to an http request or an Observable that emits 10 values and our component is destroyed before that http request returns or the 10 values have been emitted, we are still OK!

When the request does return or the 10th value is finally emitted the Observable will complete and all resources will be cleaned up.

If we look at this example from the same Rangle guide we can see that the subscription to route.params does require an unsubscribe() because we don't know when those params will stop changing (emitting new values).

The component could be destroyed by navigating away in which case the route params will likely still be changing (they could technically change until the app ends) and the resources allocated in subscription would still be allocated because there hasn't been a completion.

In this video from NgEurope Rob Wormald also says you do not need to unsubscribe from Router Observables. He also mentions the http service and ActivatedRoute.params in this video from November 2016.

The Angular tutorial, the Routing chapter now states the following:

The Router manages the observables it provides and localizes the subscriptions. The subscriptions are cleaned up when the component is destroyed, protecting against memory leaks, so we don't need to unsubscribe from the route params Observable.

Here's a discussion on the GitHub Issues for the Angular docs regarding Router Observables where Ward Bell mentions that clarification for all of this is in the works.

I spoke with Ward Bell about this question at NGConf (I even showed him this answer which he said was correct) but he told me the docs team for Angular had a solution to this question that is unpublished (though they are working on getting it approved). He also told me I could update my SO answer with the forthcoming official recommendation.

The solution we should all use going forward is to add a private ngUnsubscribe = new Subject(); field to all components that have .subscribe() calls to Observables within their class code.

We then call this.ngUnsubscribe.next(); this.ngUnsubscribe.complete(); in our ngOnDestroy() methods.

The secret sauce (as noted already by @metamaker) is to call takeUntil(this.ngUnsubscribe) before each of our .subscribe() calls which will guarantee all subscriptions will be cleaned up when the component is destroyed.

Example:

import { Component, OnDestroy, OnInit } from '@angular/core';
// RxJs 6.x+ import paths
import { filter, startWith, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { BookService } from '../books.service';

@Component({
    selector: 'app-books',
    templateUrl: './books.component.html'
})
export class BooksComponent implements OnDestroy, OnInit {
    private ngUnsubscribe = new Subject();

    constructor(private booksService: BookService) { }

    ngOnInit() {
        this.booksService.getBooks()
            .pipe(
               startWith([]),
               filter(books => books.length > 0),
               takeUntil(this.ngUnsubscribe)
            )
            .subscribe(books => console.log(books));

        this.booksService.getArchivedBooks()
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe(archivedBooks => console.log(archivedBooks));
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
Note: It's important to add the takeUntil operator as the last one to prevent leaks with intermediate Observables in the operator chain.

More recently, in an episode of Adventures in Angular Ben Lesh and Ward Bell discuss the issues around how/when to unsubscribe in a component. The discussion starts at about 1:05:30.

Ward mentions "right now there's an awful takeUntil dance that takes a lot of machinery" and Shai Reznik mentions "Angular handles some of the subscriptions like http and routing".

In response Ben mentions that there are discussions right now to allow Observables to hook into the Angular component lifecycle events and Ward suggests an Observable of lifecycle events that a component could subscribe to as a way of knowing when to complete Observables maintained as component internal state.

That said, we mostly need solutions now so here are some other resources.

A recommendation for the takeUntil() pattern from RxJs core team member Nicholas Jamieson and a TSLint rule to help enforce it: https://ncjamieson.com/avoiding-takeuntil-leaks/

Lightweight npm package that exposes an Observable operator that takes a component instance (this) as a parameter and automatically unsubscribes during ngOnDestroy: https://github.com/NetanelBasal/ngx-take-until-destroy

Another variation of the above with slightly better ergonomics if you are not doing AOT builds (but we should all be doing AOT now): https://github.com/smnbbrv/ngx-rx-collector

Custom directive *ngSubscribe that works like async pipe but creates an embedded view in your template so you can refer to the 'unwrapped' value throughout your template: https://netbasal.com/diy-subscription-handling-directive-in-angular-c8f6e762697f

I mention in a comment to Nicholas' blog that over-use of takeUntil() could be a sign that your component is trying to do too much and that separating your existing components into Feature and Presentational components should be considered. You can then | async the Observable from the Feature component into an Input of the Presentational component, which means no subscriptions are necessary anywhere. Read more about this approach here.

Share
Improve this answer
Follow
edited Nov 25 at 16:49

jonrsharpe
103k2020 gold badges192192 silver badges352352 bronze badges
answered Dec 16 '16 at 4:11

seangwright
15k66 gold badges3939 silver badges4949 bronze badges
When a route is navigated away from, then the child router for that route is destroyed. I guess this is why it's not necessary to unsubscribe from router events. – 
Günter Zöchbauer
 Jan 17 '17 at 20:21
What about local subjects, which are created by a component (e.g. for in-component logic/wiring up): Should complete() be called on these subjects in ngOnDestroy? That would cleanup the subscriptions and each subscription would have the possibility to clean up, what ever it used, in its complete-handler, right? – 
Lars
 Jan 29 '17 at 11:25
@Lars I believe local subjects get cleaned up automatically since they are created within the scope of the parent component but the Angular team is going to be recommending the approach I have detailed above in "Edit 3". – 
seangwright
 Apr 9 '17 at 23:41
19
Calling complete() by itself doesn't appear to clean up the subscriptions. However calling next() and then complete() does, I believe takeUntil() only stops when a value is produced, not when the sequence is ended. – 
Firefly
 Apr 11 '17 at 8:53
4
@seangwright A quick test with a member of type Subject inside a component and toggling it with ngIf to trigger ngOnInit and ngOnDestroy shows, that the subject and its subscriptions will never complete or get disposed (hooked up a finally-operator to the subscription). I must call Subject.complete() in ngOnDestroy, so the subscriptions can clean up after themselves. – 
Lars
 Apr 11 '17 at 9:17
1
@Firefly You are correct - added this to my answer above. @Lars Thanks for for doing the test. I thought local Subjects might be in the set of observables that Angular will clean up for you, if that's not the case then the above solution should be used. – 
seangwright
 Apr 12 '17 at 10:07
5
Your --- Edit 3 is very insightful, thanks! I just have a followup question: if using the takeUnitl approach, we never have to manually unsubscribe from any observables? Is that the case? Furthermore, why do we need to call next() in the ngOnDestroy, why not just call complete()? – 
uglycode
 Apr 22 '17 at 10:21
2
@uglycode With this approach you never have to unsubscribe unless you want further custom control of your subscriptions. Look at @Firefly's comment above. Calling complete() does not trigger takeUntil(). But it does clean up the ngUnsubscribe Subject. So next() cleans up all the others and complete() cleans up itself. – 
seangwright
 Apr 22 '17 at 17:24
@seangwright The documentation for takeUntil says that it listens for the observable to either emit a value or a complete notification, so it seems like just calling complete on the subject is enough. – 
spongessuck
 Apr 26 '17 at 15:14
@spongessuck The docs do seem to be contradictory, but looking at the RxJS 5 docs Returns the values from the source observable sequence until the other observable sequence or Promise produces a value. Looking at the source when the takeUntil Observer calls next the source completes. @firefly mentions above that calling complete() alone doesn't seem to do the trick. – 
seangwright
 Apr 26 '17 at 19:54
7
@seangwright That's disappointing; the additional boilerplate is annoying. – 
spongessuck
 Apr 27 '17 at 20:30
@spongessuck There is a decorator you can use to handle some of the boilerplate github.com/NetanelBasal/angular2-take-until-destroy. I prefer the more explicit approach, but it's a preference. – 
seangwright
 Apr 28 '17 at 22:52
first nice post,... my question is if you have a source for your newest edit (EDIT 3), if so could you append it to your answer, thx in advance – 
Nickolaus
 May 22 '17 at 13:27
@Nickolaus Thanks! I've tried to collect as much information here as possible. My source was a conversation with Ward Bell at NGConf this year. The official sources have not yet been published in the Angular.io docs (as shown by this thread). Unfortunately, this is the best I can do at the moment. You could tweet at ward and ask him about the status on the docs. – 
seangwright
 May 22 '17 at 16:41 
what if I'm subscribing to valueChanges of a FormControl that is a part of a given component? Do I still need to unsubscribe? – 
Dmitry Efimenko
 May 26 '17 at 19:28
1
@Dmitry It depends. If that subscription is the valueChanges Observable combined with other observables that outlive the lifetime of the component, then yes, you should use the above pattern. But if you are only subscribing to the valueChanges Observable then it will be destroyed/cleaned up when the component (and the form) are destroyed. – 
seangwright
 May 26 '17 at 22:43
4
Edit 3 discussed in context of events at medium.com/@benlesh/rxjs-dont-unsubscribe-6753ed4fda87 – 
HankCa
 May 29 '17 at 2:07
If following the above pattern what would I spy on to unit test 'ngOnDestroy'? Does this same pattern apply if I'm using ReplaySubject to create an observable from an array that changes? The array is in a service that's meant to live throughout the app's existence. The subscriber for the most part will also have the same lifetime, but in some instances could be destroyed and later reinitialized. – 
Jens Bodal
 Jun 8 '17 at 15:29 
1
@seangwright, thanks for staying on top of this answer! I have a question that I am still not entirely clear on. If I create a new Subject, should we also be unsubscribing from these too? I haven't been able to find any answers or blog posts that has cleared this up for me. – 
bmd
 Jun 13 '17 at 13:49
1
@bmd Take a look at @Lars's comment where it is mentioned that local Subjects do not complete when a component is destroyed unless .complete() is called on them. This is an example of where having an ngUnsubscribe: Subject<void> would help manage all other subscriptions (whether from Observables provided by DOM events, injectable services or other local Subjects). – 
seangwright
 Jun 13 '17 at 21:31
Ok, this is very interesting. So did I understand that correctly: I should NOT call this.subscription.unsubscribe() on EVERY subscription, but just need to implement the .takeUntil() method to every Observable and call a .complete() in the ngOnDestroy() method only once? Can you please confirm? – 
dave0688
 Dec 19 '17 at 16:15 
@dave0688 that is correct. You can keep track of and call .unsubscribe() on every subscription (via for ... of), but using .takeUntil(sub) or .pipe(takeUntil(sub)) is the more rxjs-ish approach – 
seangwright
 Dec 19 '17 at 21:26
@seangwright - I am now trying this solution (edit 3). If I console.log(this.ngUnsubscribe) before the 'this.ngUnsubscribe.next()' I see that the observers property of it is an array with 0 items. does it make sense? – 
Batsheva
 Jan 8 '18 at 13:02 
@seangwright I'm a bit confused as to when to use the lettable operator version of takeUntil. In my component, I have subscriptions to observables returned from a service which makes httpclient requests. In those requests, I use the pipe (tap, catchError, etc). Is that when that version should be used? – 
Alex
 Jan 22 '18 at 0:01
@seangwright. Well After a bit more research, I learned that HTTP requests are finite observables and therefore don't have to be unsubscribed. However, I'd still like to see from fleshed out examples of the two forms of takeUntil. – 
Alex
 Jan 22 '18 at 0:17
2
@Alex That is correct, HTTP requests, as explained in my answer above, are finite. But that doesn't mean that an observable that starts out as finite will always result in a finite stream. The RxJs operators allow you to manipulate the stream or data so an initial http request could become an infinite stream of numbers or simulated mouse clicks. This is why the above pattern is recommended. No matter what new operators you add to your http observable you are guaranteed it will be cleaned up. – 
seangwright
 Jan 22 '18 at 2:43
@Alex Lettable operators are a bundle/syntax change, not a functional change. You would use them when using a new enough version of RxJs (^5.5.0) to help ensure you import only what is needed per ES module (ie per file). blog.angularindepth.com/… – 
seangwright
 Jan 22 '18 at 2:45
1
Why isn't this "official solution" part of the framework yet? – 
thorn0
 Feb 14 '18 at 15:58
2
@thorn Good question. It might be that the Angular team wants us to default to letting subscriptions manage themselves using features of the framework (async pipe). RxJs allows you do go a long way towards not having to call unsubscribe() when used with async pipe by combining and manipulating Observables within your component. You can also often async pipe a value into a dumb component's @Input() and work with the raw value from that point forward. I find the ngUnsubscribe() solution helpful when Observables get very complex but I don't know if it should be the default solution. – 
seangwright
 Feb 14 '18 at 17:39
I don't understand why do we still need to do this.ngUnsubscribe.complete();. No one from outside is referencing this subject . And all the subscriptions which touched that subject,were completed. So why ? – 
Royi Namir
 Mar 29 '18 at 20:13
1
@RoyiNamir The whole idea of this approach is to have a way to clean up all Subscriptions that are being managed manually (not by AsyncPipe) in the component. We connect all subscriptions to this one resource (ngUnsubscribe) and when it is cleaned up the rest will be too. But we still have to clean up ngUnsubscribe. If we don't complete() ngUnsubscribe then it will continue to live on after the component is disposed. – 
seangwright
 Mar 29 '18 at 22:20
Isnt myobj is released when comp is destroyed? – 
Royi Namir
 Mar 30 '18 at 3:53
@seangwright you're wrong. No need to complete stackoverflow.com/questions/49569089/… – 
Royi Namir
 Mar 30 '18 at 6:04
@RoyiNamir You are correct. It appears you don't need to ngUnsubscribe.complete(). I still think it's a good habit. – 
seangwright
 Mar 30 '18 at 20:41 
Why not use a class variable? private alive = true ... .takeWhile(() => this.alive) And in the ngOnDestroy() set to false: this.alive = false. I don't see why we need to use another Subject... – 
danger89
 Apr 29 '18 at 1:12 
2
Any news on the Angular docs team publishing their 'undocumented' solution (a year later)? – 
ElliotSchmelliot
 May 25 '18 at 17:10 
1
It's worth to mention that the takeUntil operator should be the last to avoid leaks with intermediate observables in the operator chain. – 
NoNameProvided
 Jun 15 '18 at 6:56
2
Is this solution still valid for angular 6 with new version of Rxjs? – 
Anthony
 Jun 15 '18 at 14:07
@NoNameProvided Correct - more details about that in this medium post blog.angularindepth.com/… – 
seangwright
 Jun 15 '18 at 17:16
@Anthony Other than lettable operators now being called pipeable operators, I believe everything detailed should still apply. You will want to use the import { takeUntil } from 'rxjs/operators' instead of the mutating import import 'rxjs/add/operator/takeUntil'; – 
seangwright
 Jun 15 '18 at 17:18
1
@seangwright Why do I getting this Generic type Subject<T> requires 1 type argument(s) by following this approach, did I missed something? Thanks – 
Roxy'Pro
 Jun 29 '18 at 7:19
1
@Roxy'Pro you just need to add an argument to template Subject (even if you are not going to use it), so that you have, e.g., Subject<boolean>. That is: private ngUnsubscribe: Subject<boolean> = new Subject(); – 
Jago
 Jul 2 '18 at 10:04
1
I found this guide online which explains it well: github.com/ueler/angular-rxjs-unsubscribe – 
Ynv
 Feb 10 '20 at 21:07
Does not the destroying of the Component also clean up the Subject automatically? Would it not be sufficient to only use .next()? I've worked on a few large stacks where we use this trick, but we don't complete(). Since the Subject is declared as a local variable in the component, and Angular destroys local variables in any component that is destroyed, why is complete() necessary? – 
Lars Holdaas
 Feb 27 '20 at 8:00
1
Is it still in 2020 relevant? Or in Angular 10 something has changed? – 
tillias
 Oct 6 '20 at 9:01
@tillias This is still relevant if you are subscribing to Observables in code and you want a consistent way to ensure they are cleaned up when the component/directive are destroyed. However, the recommended approach to Observables is to use the | async pipe in the template. Using a state management library like Akita or NgRx will result in most Observables being bound to the template and not subscribed to in code. – 
seangwright
 Oct 14 '20 at 1:00
Ben mentions that there are discussions right now to allow Observables to hook into the Angular component lifecycle events (...). Does anyone know where/if we'll see the fruit of these discussions? Cheers! – 
Joel Balmer
 May 6 at 10:39
Add a comment

122

You don't need to have bunch of subscriptions and unsubscribe manually. Use Subject and takeUntil combo to handle subscriptions like a boss:

import { Subject } from "rxjs"
import { takeUntil } from "rxjs/operators"

@Component({
  moduleId: __moduleName,
  selector: "my-view",
  templateUrl: "../views/view-route.view.html"
})
export class ViewRouteComponent implements OnInit, OnDestroy {
  componentDestroyed$: Subject<boolean> = new Subject()

  constructor(private titleService: TitleService) {}

  ngOnInit() {
    this.titleService.emitter1$
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((data: any) => { /* ... do something 1 */ })

    this.titleService.emitter2$
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((data: any) => { /* ... do something 2 */ })

    //...

    this.titleService.emitterN$
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((data: any) => { /* ... do something N */ })
  }

  ngOnDestroy() {
    this.componentDestroyed$.next(true)
    this.componentDestroyed$.complete()
  }
}
Alternative approach, which was proposed by @acumartini in comments, uses takeWhile instead of takeUntil. You may prefer it, but mind that this way your Observable execution will not be cancelled on ngDestroy of your component (e.g. when you make time consuming calculations or wait for data from server). Method, which is based on takeUntil, doesn't have this drawback and leads to immediate cancellation of request. Thanks to @AlexChe for detailed explanation in comments.

So here is the code:

@Component({
  moduleId: __moduleName,
  selector: "my-view",
  templateUrl: "../views/view-route.view.html"
})
export class ViewRouteComponent implements OnInit, OnDestroy {
  alive: boolean = true

  constructor(private titleService: TitleService) {}

  ngOnInit() {
    this.titleService.emitter1$
      .pipe(takeWhile(() => this.alive))
      .subscribe((data: any) => { /* ... do something 1 */ })

    this.titleService.emitter2$
      .pipe(takeWhile(() => this.alive))
      .subscribe((data: any) => { /* ... do something 2 */ })

    // ...

    this.titleService.emitterN$
      .pipe(takeWhile(() => this.alive))
      .subscribe((data: any) => { /* ... do something N */ })
  }

  ngOnDestroy() {
    this.alive = false
  }
}
Share
Improve this answer
Follow
edited Sep 28 '20 at 23:03
answered Mar 9 '17 at 12:35

metamaker
1,99722 gold badges1616 silver badges1717 bronze badges
2
If he just use a bool to keep the state, how to make "takeUntil" works as expected? – 
Val
 Apr 24 '17 at 3:38
7
I think there is a significant difference between using takeUntil and takeWhile. The former unsubscribes from the source observable immediately when fired, while the latter unsubscribes only as soon as next value is produced by the source observable. If producing a value by the source observable is a resource consuming operation, choosing between the two may go beyond style preference. See the plunk – 
Alex Che
 Aug 22 '17 at 16:40
2
@AlexChe thanks for providing interesting plunk! This is very valid point for general usage of takeUntil vs takeWhile, however, not for our specific case. When we need to unsubscribe listeners on component destruction, we are just checking boolean value like () => alive in takeWhile, so any time/memory consuming operations are not used and difference is pretty much about styling (ofc, for this specific case). – 
metamaker
 Aug 31 '17 at 10:28 
2
@metamaker Say, in our component we subscribe to an Observable, which internally mines some crypto-currency and fires a next event for an every mined coin, and mining one such coin takes a day. With takeUntil we will unsubscribe from the source mining Observable immediately once ngOnDestroy is called during our component destruction. Thus the mining Observable function is able to cancel it's operation immediately during this process. – 
Alex Che
 Aug 31 '17 at 14:19 
2
OTOH, if we use takeWhile, in the ngOnDestory we just set the boolean variable. But the mining Observable function might still work for up to one day, and only then during it's next call will it realize that there are no subscriptions active and it needs to cancel. – 
Alex Che
 Aug 31 '17 at 14:23 
Show 8 more comments

101

The Subscription class has an interesting feature:

Represents a disposable resource, such as the execution of an Observable. A Subscription has one important method, unsubscribe, that takes no argument and just disposes the resource held by the subscription.
Additionally, subscriptions may be grouped together through the add() method, which will attach a child Subscription to the current Subscription. When a Subscription is unsubscribed, all its children (and its grandchildren) will be unsubscribed as well.

You can create an aggregate Subscription object that groups all your subscriptions. You do this by creating an empty Subscription and adding subscriptions to it using its add() method. When your component is destroyed, you only need to unsubscribe the aggregate subscription.

@Component({ ... })
export class SmartComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.subscriptions.add(this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes));
    this.subscriptions.add(/* another subscription */);
    this.subscriptions.add(/* and another subscription */);
    this.subscriptions.add(/* and so on */);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
Share
Improve this answer
Follow
edited Aug 17 '18 at 20:21
answered May 3 '17 at 12:00

Steven Liekens
11.4k66 gold badges5252 silver badges7878 bronze badges
1
I'm using this approach. Wondering if this is better than using the approach with takeUntil(), like in the accepted answer.. drawbacks ? – 
Manuel Di Iorio
 Sep 19 '17 at 20:28
1
No drawbacks that I'm aware of. I don't think this is better, just different. – 
Steven Liekens
 Sep 19 '17 at 20:56
3
See medium.com/@benlesh/rxjs-dont-unsubscribe-6753ed4fda87 for further discussion on the official takeUntil approach versus this approach of collecting subscriptions and calling unsubscribe. (This approach seems a lot cleaner to me.) – 
Josh Kelley
 Mar 29 '18 at 20:31
5
One small benefit of this answer: you don't have to check if this.subscriptions is null – 
user2023861
 Aug 24 '18 at 19:58
3
Just avoid the chaining of add methods like sub = subsciption.add(..).add(..) because in many cases it produces unexpected results github.com/ReactiveX/rxjs/issues/2769#issuecomment-345636477 – 
Evgeniy Generalov
 Sep 29 '18 at 13:51 
Show 1 more comment

42

Some of the best practices regarding observables unsubscriptions inside Angular components:

A quote from Routing & Navigation

When subscribing to an observable in a component, you almost always arrange to unsubscribe when the component is destroyed.

There are a few exceptional observables where this is not necessary. The ActivatedRoute observables are among the exceptions.

The ActivatedRoute and its observables are insulated from the Router itself. The Router destroys a routed component when it is no longer needed and the injected ActivatedRoute dies with it.

Feel free to unsubscribe anyway. It is harmless and never a bad practice.

And in responding to the following links:

(1) Should I unsubscribe from Angular 2 Http Observables?
(2) Is it necessary to unsubscribe from observables created by Http methods?
(3) RxJS: Don’t Unsubscribe
(4) The easiest way to unsubscribe from Observables in Angular
(5) Documentation for RxJS Unsubscribing
(6) Unsubscribing in a service is kind of pointless since there is no chance of memory leaks
(7) Do we need to unsubscribe from observable that completes/errors-out?
(8) A comment about the http observable
I collected some of the best practices regarding observables unsubscriptions inside Angular components to share with you:

http observable unsubscription is conditional and we should consider the effects of the 'subscribe callback' being run after the component is destroyed on a case by case basis. We know that angular unsubscribes and cleans the http observable itself (1), (2). While this is true from the perspective of resources it only tells half the story. Let's say we're talking about directly calling http from within a component, and the http response took longer than needed so the user closed the component. The subscribe() handler will still be called even if the component is closed and destroyed. This can have unwanted side effects and in the worse scenarios leave the application state broken. It can also cause exceptions if the code in the callback tries to call something that has just been disposed of. However at the same time occasionally they are desired. Like, let's say you're creating an email client and you trigger a sound when the email is done sending - well you'd still want that to occur even if the component is closed (8).
No need to unsubscribe from observables that complete or error. However, there is no harm in doing so(7).
Use AsyncPipe as much as possible because it automatically unsubscribes from the observable on component destruction.
Unsubscribe from the ActivatedRoute observables like route.params if they are subscribed inside a nested (Added inside tpl with the component selector) or dynamic component as they may be subscribed many times as long as the parent/host component exists. No need to unsubscribe from them in other scenarios as mentioned in the quote above from Routing & Navigation docs.
Unsubscribe from global observables shared between components that are exposed through an Angular service for example as they may be subscribed multiple times as long as the component is initialized.
No need to unsubscribe from internal observables of an application scoped service since this service never get's destroyed, unless your entire application get's destroyed, there is no real reason to unsubscribe from it and there is no chance of memory leaks. (6).

Note: Regarding scoped services, i.e component providers, they are destroyed when the component is destroyed. In this case, if we subscribe to any observable inside this provider, we should consider unsubscribing from it using the OnDestroy lifecycle hook which will be called when the service is destroyed, according to the docs.
Use an abstract technique to avoid any code mess that may be resulted from unsubscriptions. You can manage your subscriptions with takeUntil (3) or you can use this npm package mentioned at (4) The easiest way to unsubscribe from Observables in Angular.
Always unsubscribe from FormGroup observables like form.valueChanges and form.statusChanges
Always unsubscribe from observables of Renderer2 service like renderer2.listen
Unsubscribe from every observable else as a memory-leak guard step until Angular Docs explicitly tells us which observables are unnecessary to be unsubscribed (Check issue: (5) Documentation for RxJS Unsubscribing (Open)).
Bonus: Always use the Angular ways to bind events like HostListener as angular cares well about removing the event listeners if needed and prevents any potential memory leak due to event bindings.
A nice final tip: If you don't know if an observable is being automatically unsubscribed/completed or not, add a complete callback to subscribe(...) and check if it gets called when the component is destroyed.

Share
Improve this answer
Follow
edited Oct 2 '18 at 12:00
answered Aug 7 '18 at 18:03

Mouneer
11.2k22 gold badges3434 silver badges4545 bronze badges
Answer for No. 6 is not quite right. Services are destroyed and their ngOnDestroy is called when the service is provided at a level other than the root level e.g. provided explicitly in a component that later gets removed. In these cases you should unsubscribe from the services inner observables – 
Drenai
 Sep 9 '18 at 7:50 
@Drenai, thanks for your comment and politely I don't agree. If a component is destroyed, the component, service and the observable will be all GCed and the unsubscription will be useless in this case unless you keep a reference for the observable anywhere away from the component (Which is not logical to leak the component states globally despite scoping the service to the component) – 
Mouneer
 Sep 11 '18 at 16:02 
If the service being destroyed has a subscription to an observable belonging to another service higher up in the DI hierarchy, then GC won't occur. Avoid this scenario by unsubscribing in ngOnDestroy, which is always called when services are destroyed github.com/angular/angular/commit/… – 
Drenai
 Sep 11 '18 at 22:54
Well said @Drenai but I am talking originally about higher level services that live as long as the app is running and never destroyed. But certainly your point is valid regarding to scoped services. So thanks again and I will edit the answer to include a note about scoped services and to eliminate any ambiguity. – 
Mouneer
 Sep 29 '18 at 12:47
3
@Tim First of all, Feel free to unsubscribe anyway. It is harmless and never a bad practice. and regarding your question, it depends. If the child component is initiated multiple times (For example, added inside ngIf or being loaded dynamically), you must unsubscribe to avoid adding multiple subscriptions to the same observer. Otherwise no need. But I prefer unsubscribing inside the child component as this makes it more reusable and isolated from how it could be used. – 
Mouneer
 Oct 8 '18 at 17:03
Show 3 more comments

19

It depends. If by calling someObservable.subscribe(), you start holding up some resource that must be manually freed-up when the lifecycle of your component is over, then you should call theSubscription.unsubscribe() to prevent memory leak.

Let's take a closer look at your examples:

getHero() returns the result of http.get(). If you look into the angular 2 source code, http.get() creates two event listeners:

_xhr.addEventListener('load', onLoad);
_xhr.addEventListener('error', onError);
and by calling unsubscribe(), you can cancel the request as well as the listeners:

_xhr.removeEventListener('load', onLoad);
_xhr.removeEventListener('error', onError);
_xhr.abort();
Note that _xhr is platform specific but I think it's safe to assume that it is an XMLHttpRequest() in your case.

Normally, this is enough evidence to warrant a manual unsubscribe() call. But according this WHATWG spec, the XMLHttpRequest() is subject to garbage collection once it is "done", even if there are event listeners attached to it. So I guess that's why angular 2 official guide omits unsubscribe() and lets GC clean up the listeners.

As for your second example, it depends on the implementation of params. As of today, the angular official guide no longer shows unsubscribing from params. I looked into src again and found that params is a just a BehaviorSubject. Since no event listeners or timers were used, and no global variables were created, it should be safe to omit unsubscribe().

The bottom line to your question is that always call unsubscribe() as a guard against memory leak, unless you are certain that the execution of the observable doesn't create global variables, add event listeners, set timers, or do anything else that results in memory leaks.

When in doubt, look into the implementation of that observable. If the observable has written some clean up logic into its unsubscribe(), which is usually the function that is returned by the constructor, then you have good reason to seriously consider calling unsubscribe().

Share
Improve this answer
Follow
edited Dec 1 '16 at 7:14
answered Dec 1 '16 at 7:09

Chuanqi Sun
9731111 silver badges2424 bronze badges
Add a comment

9

Angular 2 official documentation provides an explanation for when to unsubscribe and when it can be safely ignored. Have a look at this link:

https://angular.io/docs/ts/latest/cookbook/component-communication.html#!#bidirectional-service

Look for the paragraph with the heading Parent and children communicate via a service and then the blue box:

Notice that we capture the subscription and unsubscribe when the AstronautComponent is destroyed. This is a memory-leak guard step. There is no actual risk in this app because the lifetime of a AstronautComponent is the same as the lifetime of the app itself. That would not always be true in a more complex application.

We do not add this guard to the MissionControlComponent because, as the parent, it controls the lifetime of the MissionService.

I hope this helps you.

Share
Improve this answer
Follow
edited Jun 20 '20 at 9:12

CommunityBot
111 silver badge
answered Jun 29 '16 at 11:08

Cerny
16533 bronze badges
4
as a component you never know whether you're a child or not. therefore you should always unsubscribe from subscriptions as best practice. – 
SeriousM
 Oct 29 '16 at 17:57
2
The point about MissionControlComponent is not really about whether it's a parent or not, it's that the component itself provides the service. When MissionControl gets destroyed, so does the service and any references to the instance of the service, thus there is no possibility of a leak. – 
ender
 Nov 10 '16 at 20:44
Add a comment

6

Based on : Using Class inheritance to hook to Angular 2 component lifecycle

Another generic approach:

export abstract class UnsubscribeOnDestroy implements OnDestroy {
  protected d$: Subject<any>;

  constructor() {
    this.d$ = new Subject<void>();

    const f = this.ngOnDestroy;
    this.ngOnDestroy = () => {
      f();
      this.d$.next();
      this.d$.complete();
    };
  }

  public ngOnDestroy() {
    // no-op
  }

}
Expand snippet
And use :

@Component({
    selector: 'my-comp',
    template: ``
})
export class RsvpFormSaveComponent extends UnsubscribeOnDestroy implements OnInit {

    constructor() {
        super();
    }

    ngOnInit(): void {
      Observable.of('bla')
      .takeUntil(this.d$)
      .subscribe(val => console.log(val));
    }
}
Expand snippet
Share
Improve this answer
Follow
edited Feb 23 '18 at 14:54
answered Apr 12 '17 at 11:04

JoG
83222 gold badges99 silver badges1616 bronze badges
1
This does NOT work correctly. Please be careful when using this solution. You are missing a this.componentDestroyed$.next() call like the accepted solution by sean above... – 
philn
 Feb 23 '18 at 12:00
@philn Should we use this.destroy$.next() and this.destroy$.complete() in ngOnDestroy() when using takeUntil? – 
Fredrick
 Dec 26 '20 at 15:31
it nicely works as is. the only missing thing is error handling. if components ngOnInit fails (it is f() in the code), the d$ still should emit. try/finally block is needed there – 
IAfanasov
 Sep 14 at 7:42