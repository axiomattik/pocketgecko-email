<form id="pocketgecko-email" action="/wp-admin/admin-post.php" method="post" enctype="multipart/form-data">
  <h2>Send Email</h2>
  <input type="hidden" name="action" value="send_email">
  <?php wp_nonce_field( 'send_email', 'pgem-nonce' ); ?>

  <?php if ( current_user_can( 'edit_posts' ): ?>

    <label for="recipient">Recipient: </label>
    <input id="recipient" type="text" name="recipient" required>

    <label for="cc">Cc: </label>
    <input id="cc" type="text" name="cc">

    <label for="bcc">Bcc: </label>
    <input id="bcc" type="text" name="cc">

  <?php else: ?>

    <input type="hidden" name="recipient" value="default">

  <? endif; ?>

  <label for="subject">Subject: </label>
  <input id="subject" type="text" name="subject" required>

  <label for="body">Body: </label>
  <textarea id="body" name="body" required><textarea>

  <label for="attachements">Attachment(s): </label>
  <input id="attachments" type="file" name="attachments[]" multiple>

  <p class="submit">
    <input type="submit" class="button button-primary" value="Send">
  </p>

</form>