class MailService {
    constructor(sender) {
        this.sender = sender;
    }
}

class WhatsAppService extends MailService {
    // overriding constructor
    constructor(sender, isBusiness) {
        super(sender);
        this.isBusiness = isBusiness;
    }
}

// class MailServicez {
//     constructor(sender) {
//         this.sender = sender;
//     }
// }

// class WhatsAppServicez extends MailServicez {
//     constructor(sender, isBusiness) {
//         // without super will be error
//         this.sender = sender;
//         this.isBusiness = isBusiness;
//     }
// }

// const whatsapp = new WhatsAppServicez('+6281234567890', true); // error reference
const whatsapp = new WhatsAppService('+6281234567890', true); // error reference

// METHOD OVERRIDING
class MailServices {
    constructor(sender) {
        this.sender = sender;
    }

    sendMessage(message, receiver) {
        console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
}

class WhatsAppServices extends MailServices {
    constructor(sender, isBusiness) {
        super(sender);
        this.isBusiness = isBusiness;
    }

    // Overriding method
    sendMessage(message, receiver) {
        console.log(`${this.sender} sent ${message} to ${receiver} via WhatsApp`);
    }
}


const mailServices = new MailServices('someSender');
const whatsappServices = new WhatsAppServices('+6281234567890', true);

mailServices.sendMessage('Hai, apa kabar?', 'someReceiver');
whatsappServices.sendMessage('Hai, apa kabar?', '+6289876543210');