set events

      this.dispatchEvent(new CustomEvent('selected-changed', {
        bubbles: true,
        cancelable: true,
        composed: true,
      }));



      const index = this.getIndexForEl_(e.target);
      const { item } = this.cache_[index];
      this.selected = item[this.itemValue];
      this.dispatchEvent(new CustomEvent('selection-updated', {
        detail: item[this.itemValue],
      }));