=== PocketGecko Email ===
Contributors: axiomattik
Tags: smtp, email, post, ajax, settings, options
Requires at least: 5.0
Tested up to: 5.7
Stable tag: 1.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Provides an email settings page and simplifies sending emails using POST/AJAX.

== Description ==

PocketGecko Email makes it easy to configure `wp_mail` using basic authentication so other plugins that try to send emails will function correctly. 

This plugin also sets up two endpoints for internal use at `/wp-admin/admin-post.php` and `/wp-admin/admin-ajax.php` which accept POST or AJAX requests for sending emails. These endpoints support sending Cc and Bcc. Emails may also be sent with one or multiple file attachments, which are automatically uploaded to the Media Library.

Only privileged users are able to send emails to arbitrary recipients. Non-priveleged users are restricted to sending emails only to the account used for sending them. 

The plugin also implements several front-end JavaScript functions under the `pgem` namespace: `ajaxifyForm`, `sendForm` and `sendEmail` that can simplify sending emails or implementing HTML forms that submit to the AJAX endpoint.

= Docs and Support =

https://pocketgecko.co.uk/email/docs


= Screenshots =

1. The settings page having successfuly sent a test email.
2. A email form rendered by the Twenty Twenty-One theme.

== Privacy Notices ==


== Changelog ==

= 1.0 =
* Release

== Copyright ==

Icons provided by fontawesome.com - [license](https://fontawesome.com/license)
