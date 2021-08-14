{
	"name": "POS Custom Kitchen Ticket",
	"summary": "POS Custom Kitchen Ticket",
	"version": "14.0.1",
	"description": """ POS Custom Kitchen Ticket """,    
	"author": "KKA",
	"maintainer": "",
	"license" :  "Other proprietary",
	"website": "",
	"images": [""],
	"category": "Point of Sale",
	"depends": ["pos_restaurant"],
	"data": [
		'views/assets.xml',
	],
	"qweb": [
        'static/src/xml/pos.xml'
	],
	'installable': True,
	'application': True,
	'auto_install': False,
	
}
