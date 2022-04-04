# -*- coding: utf-8 -*-
{
    'name': "Call Notification",
    'summary': """
        Call Notification
    """,
    'description': """
        Call Notification
    """,
    'author': "Premium Numbers",
    'website': "https://premiumnumbers.es",
    'category': 'Tools',
    'version': '1',
    'depends': ['bus', 'contacts'],
    'license': 'GPL-3',
    'images': ['static/description/banner.png'],
    'data': [
        'security/ir.model.access.csv',
        'data/notification_data.xml',
        'views/assets.xml',
        'views/call_register_view.xml',
        'views/res_config_settings.xml',
    ],
}
