// NORMAL FUNCTION
class WhatsAppService {
    constructor(sender) {
        this.sender = sender;
    }

    sendMessage(message, receiver) {
        console.log(`${this.sender} sent ${message} to ${receiver}`);
    }

    sendBroadcastMessage(message, receivers) {
        for (const receiver of receivers) {
            this.sendMessage(message, receiver);
        }
    }
}

class EmailService {
    constructor(sender) {
        this.sender = sender;
    }

    sendMessage(message, receiver) {
        console.log(`${this.sender} sent ${message} to ${receiver}`);
    }

    sendDelayedMessage(message, receiver, delay) {
        setTimeout(() => {
            this.sendMessage(message, receiver);
        }, delay);
    }
}

// INHERITANCE IMPLEMENTATION
// Superclass
class MailService {
    constructor(sender) {
        this.sender = sender;
    }

    sendMessage(message, receiver) {
        console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
}

// Subclass
class WhatsAppServiceImpl extends MailService {
    sendBroadcastMessage(message, receivers) {
        for (const receiver of receivers) {
            this.sendMessage(message, receiver);
        }
    }
}

// Subclass
class EmailServiceImpl extends MailService {
    sendDelayedMessage(message, receiver, delay) {
        setTimeout(() => {
            this.sendMessage(message, receiver);
        }, delay);
    }
}

const whatsapp = new WhatsAppServiceImpl('+6281234567890');
const email = new EmailServiceImpl('dimas@dicoding.com');

whatsapp.sendMessage('Hello', '+6289876543210');
whatsapp.sendBroadcastMessage('Hello', ['+6289876543210', '+6282234567890']);
// whatsapp.sendDelayedMessage(); // Error

email.sendMessage('Hello', 'john@doe.com');
email.sendDelayedMessage('Hello', 'john@doe.com', 3000);
// email.sendBroadcastMessage(); // Error

// INHERITANCE NON ES6
// using prototype
function MailServiceNonES(sender) {
    this.sender = sender;
}

MailServiceNonES.prototype.sendMessage = function (message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
}

function WhatsAppServiceNonES(sender) {
    MailServiceNonES.call(this, sender);
}

// Prototype inheritance
WhatsAppServiceNonES.prototype = Object.create(MailServiceNonES.prototype);
WhatsAppServiceNonES.prototype.constructor = WhatsAppServiceNonES;

WhatsAppServiceNonES.prototype.sendBroadcastMessage = function (message, receivers) {
    for (const receiver of receivers) {
        this.sendMessage(message, receiver);
    }
}

function EmailServiceNonES(sender) {
    MailServiceNonES.call(this, sender);
}

// Prototype inheritance
EmailServiceNonES.prototype = Object.create(MailServiceNonES.prototype);
EmailServiceNonES.prototype.constructor = EmailServiceNonES;

EmailServiceNonES.prototype.sendDelayedMessage = function (message, receiver, delay) {
    setTimeout(() => {
        this.sendMessage(message, receiver);
    }, delay);
}

const whatsappNonES = new WhatsAppServiceNonES('+6281234567890');
const emailNonES = new EmailServiceNonES('dimas@dicoding.com');
whatsappNonES.sendMessage('Hello', '+6289876543210');
whatsappNonES.sendBroadcastMessage('Hello', ['+6289876543210', '+6282234567890']);
emailNonES.sendMessage('Hello', 'john@doe.com');
emailNonES.sendDelayedMessage('Hello', 'john@doe.com', 3000);
 
console.log(whatsappNonES instanceof WhatsAppServiceNonES); // true
console.log(whatsappNonES instanceof EmailServiceNonES); // false
console.log(whatsappNonES instanceof MailServiceNonES); // true
 
console.log(emailNonES instanceof EmailServiceNonES); // true
console.log(emailNonES instanceof WhatsAppServiceNonES); // false
console.log(emailNonES instanceof MailServiceNonES); // true