! function(t) {
    var e, n, i = function(t, e, n) {
        return new i.init(t, e, n)
    };
    i.prototype = {
        run: function() {
            e = document.getElementById(this.tagId), n = document.createElement(this.typeOfList), e.appendChild(n);
            for (var t = 0; t < this.content.length; t++) {
                var i = document.createElement("li");
                i.innerHTML = this.content[t], n.appendChild(i)
            }
            return this
        },
        update: function(t = []) {
            if (t.length < 1) throw "Insufficient Parameters to update list";
            if (t.constructor !== Array) throw "Array Expected in Parameter";
            this.content = this.content.concat(t), this.draw()
        },
        listLength: function() {
            return document.getElementsByTagName("li").length
        },
        draw: function() {
            document.querySelector(this.typeOfList).innerHTML = "";
            for (var t = 0; t < this.content.length; t++) {
                var e = document.createElement("li");
                e.innerHTML = this.content[t], n.appendChild(e)
            }
        },
        remove: function(t = this.listLength()) {
            if (t > this.listLength()) throw "Value is greater then the size of List";
            if (t <= 0) throw "Value should be positive";
            this.content.splice(t - 1, 1), this.draw()
        }
    }, i.init = function(t, e, n) {
        return this.tagId = t, this.typeOfList = e, this.content = n, this
    }, i.init.prototype = i.prototype, t.ulol = i
}(window);
