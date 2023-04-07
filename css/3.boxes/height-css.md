__height auto__


https://stackoverflow.com/questions/15943009/difference-between-css-height-100-vs-height-auto

253

height: 100% gives the element 100% height of its parent container.

height: auto means the element height will depend upon the height of its children.

Consider these examples:

height: 100%

<div style="height: 50px">
    <div id="innerDiv" style="height: 100%">
    </div>
</div>

#innerDiv is going to have height: 50px

height: auto

<div style="height: 50px">
    <div id="innerDiv" style="height: auto">
          <div id="evenInner" style="height: 10px">
          </div>
    </div>
</div>

#innerDiv is going to have height: 10px

clientHeight / read only / viewport

offsetHeight / read only /includes border

scrollHeight / whole doc / read only

innherHeight - viewport of borwser window / includes scrollbar

outerHeight - browser window as a whole

 

#HEIGHTS

scrollHeight: ENTIRE  content & padding (visible or not) Height of all content + paddings, despite of height of the element.  
clientHeight: VISIBLE content & padding Only visible height: content portion limited by explicitly defined height of the element.  Not margin
offsetHeight: VISIBLE content & padding + border + scrollbar Height occupied by the element on document. Not margin

innerHeight

The max-height property is used to set a maximum height of a specified element. It overrides the height property and prevents the value of the height property from becoming larger than a specified value. It is sometimes useful to constrain the height of an element in CSS to a certain range.

Min-height.  Whatever relative value you set it, it has to be at least x amount

https://www.w3schools.com/css/css_rwd_images.asp