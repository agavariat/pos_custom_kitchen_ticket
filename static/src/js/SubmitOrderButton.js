odoo.define('pos_custom_kitchen_ticket.SubmitOrderButton', function(require) {
	"use strict";

	const { Component } = owl;
	const Registries = require('point_of_sale.Registries');
	const SubmitOrderButton = require('pos_restaurant.SubmitOrderButton');

	const CustomSubmitOrderButton = (SubmitOrderButton) =>
		class extends SubmitOrderButton {
			
			async onClick() {
				let self = this;
				let order = self.env.pos.get_order();
				if (!order.get_client()) {
					return self.showPopup('ErrorPopup', {
						title: self.env._t('Unknown Customer'),
						body: self.env._t('Please Select Customer To Continue.'),
					});
				}else{
					super.onClick();
				}
			}
			
	};

	Registries.Component.extend(SubmitOrderButton, CustomSubmitOrderButton);
	return SubmitOrderButton;
 
});
