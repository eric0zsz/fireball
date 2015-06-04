Polymer({
    is: 'app-sidebar',

    _onOpen: function ( event ) {
        var dialog = Remote.require('dialog');

        var result = dialog.showOpenDialog ( {
            title: "Choose a project",
            properties: [ 'openDirectory' ]
        } );

        if ( result ) {
            Editor.sendToCore( 'app:open-project', result[0] );
        }
    },

    _onSelectedChanged: function ( event ) {
        this.fire('select', {
            index: event.detail.value
        });
    },
});
