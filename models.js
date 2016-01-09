/*Breadcrumbs = new Mongo.Collection("Breadcrumbs");




var Schema = {};

//set up subscriptions so that one will provide a list of titles of nearby breadcrumbs
//and one will provide the actual message when you get close enough (within 3 meter radius?).
Schema.Breadcrumb = new SimpleSchema({
    createdBy: {
    	type: Schema.User,
    	autoValue: function() {
    		if(this.isInsert) {
                return Meteor.userId();
            }
    	}
    },
    latLng: {
    	type: Number,
    	autoValue: function() {
    		if(this.isInsert) {
                return Geolocation.latLng();
            }
    	}
    },
    title: {
    	type: String
    },
    message: {
    	type: String
    }
});

Schema.User = new SimpleSchema({
    username: {
        type: String,
        // For accounts-password, either emails or username is required, but not both. It is OK to make this
        // optional here because the accounts-password package does its own validation.
        // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
        optional: true
    },
    emails: {
        type: Array,
        // For accounts-password, either emails or username is required, but not both. It is OK to make this
        // optional here because the accounts-password package does its own validation.
        // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
        optional: true
    },
    "emails.$": {
        type: Object
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean
    },
    createdAt: {
        type: Date
    },
    // Make sure this services field is in your schema if you're using any of the accounts packages
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    // Add `roles` to your schema if you use the meteor-roles package.
    // Option 1: Object type
    // If you specify that type as Object, you must also specify the
    // `Roles.GLOBAL_GROUP` group whenever you add a user to a role.
    // Example:
    // Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP);
    // You can't mix and match adding with and without a group since
    // you will fail validation in some cases.
    roles: {
        type: Object,
        optional: true,
        blackbox: true
    },
    friends: {
        type: [Schema.User],
        autoValue: function() {
            if(this.isInsert) {
                return [];
            }
        }
    }
});


Breadcrumbs.attachSchema(Schema.Breadcrumb);
Meteor.users.attachSchema(Schema.User);*/