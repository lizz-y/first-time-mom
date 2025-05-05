
//forums

function postThread() {
    const title = document.getElementById('topicTitle').value;
    const content = document.getElementById('topicContent').value;

    if (!title || !content) {
      alert('Please enter both title and content.');
      return;
    }

    const thread = document.createElement('div');
    thread.className = 'thread';
    thread.innerHTML = `<h3>${title}</h3><p><strong>Posted by:</strong> @anonymous</p><p>${content}</p>`;

    const forum = document.getElementById('forumThreads');
    forum.insertBefore(thread, forum.firstChild);

    // Reset input
    document.getElementById('topicTitle').value = '';
    document.getElementById('topicContent').value = '';
  }

//form

function submitForm(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Example alert (replace with actual backend POST)
    alert(`Thank you, ${name}! Your message has been sent.`);

    // Clear the form
    document.getElementById('contactForm').reset();
  }