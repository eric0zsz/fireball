Polymer({
    is: 'app-shell',

    ready: function () {
        this.curIndex = 0;
    },

    _onSelect: function ( event ) {
        this.curIndex = event.detail.index;
    },

    _recentProject: function ( idx ) {
        return idx === 0;
    },

    _newProject: function ( idx ) {
        return idx === 1;
    },
});
