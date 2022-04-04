odoo.define('premiumnumbers.NotificationManager', function (require) {
    "use strict";
    
    var AbstractService = require('web.AbstractService');
    var core = require("web.core");
    
    var PremiumnumbersNotificationManager = AbstractService.extend({
        dependencies: ['bus_service'],
    
        /**
         * @override
         */
        start: function () {
            this._super.apply(this, arguments);
            this.call('bus_service', 'onNotification', this, this._onNotification);
        },
    
        _onNotification: function (notifs) {
            var self = this;
            _.each(notifs, function (notif) {
                var model = notif[0][1];
                var type = notif[1].type;
                if (model === 'call_notification' && type === 'show') {
                    self.open_popup(notif[1]);
                }
                if (model === 'call_notification' && type === 'hide') {
                    self.do_action({type: 'ir.actions.act_window_close'});
                }
            });
        },
        open_popup: function (data) {
            var self = this;
            this._rpc({
                model: 'call.register',
                method: 'show_popup',
                kwargs: data,
            }).then(function (action) {
                self.do_action(action);
            });
        }
    
    });
    
    core.serviceRegistry.add('premiumnumbers_notification_service', PremiumnumbersNotificationManager);
    
    return PremiumnumbersNotificationManager;
    
    });
    