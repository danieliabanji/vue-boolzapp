

const { createApp } = Vue
// const dt = loxon.DateTime
const app = createApp({
    data() {
        return {
            currentChat: 0,
            newMessage: "",
            searchTerm: "",
            contacts: [
                {
                    id: 1,
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            drop_menu: 0
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            drop_menu: 1
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                            drop_menu: 2
                        }
                    ],
                },
                {
                    id: 2,
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent',
                            drop_menu: 0
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            drop_menu: 1
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            drop_menu: 2
                        }
                    ],
                },
                {
                    id: 3,
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received',
                            drop_menu: 0
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            drop_menu: 1
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received',
                            drop_menu: 2
                        }
                    ],
                },
                {
                    id: 4,
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            drop_menu: 0
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            drop_menu: 1
                        }
                    ],
                },
                {
                    id: 5,
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent',
                            drop_menu: 0
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received',
                            drop_menu: 1
                        }
                    ],
                },
                {
                    id: 6,
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent',
                            drop_menu: 0
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received',
                            drop_menu: 1
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent',
                            drop_menu: 2
                        }
                    ],
                },
                {
                    id: 7,
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent',
                            drop_menu: 0
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received',
                            drop_menu: 1
                        }
                    ],
                },
                {
                    id: 8,
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received',
                            drop_menu: 0
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent',
                            drop_menu: 1
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received',
                            drop_menu: 2
                        }
                    ],
                }
            ]

        }
    },
    methods: {
        currentActive(id) {
            this.currentChat = this.contacts.findIndex((contact) => parseInt(contact.id) === id)
        },
        messageSent() {
            const d = new Date();
            let newdate = d.toLocaleString('it-IT');
            if (this.newMessage != '') {
                this.contacts[this.currentChat].messages.push(
                    {
                        date: newdate,
                        message: this.newMessage,
                        status: 'sent'
                    }
                );

                setTimeout(this.messageReceived, 1000);
            }

            this.newMessage = '';
        },

        messageReceived() {
            const d = new Date();
            let newdate = d.toLocaleString('it-IT');
            this.contacts[this.currentChat].messages.push(
                {
                    date: newdate,
                    message: 'Ok!',
                    status: 'received'
                }
            );
        },
        
        getLastMessage(contact){
            const msg = contact.messages.filter((message)=> {
                return message.status === 'received';
            })
            return msg[msg.length - 1];
        }
    },
    computed: {
        filteredConatact() {
            return this.contacts.filter((contact) => {
                const name = contact.name.toLowerCase();
                return name.includes(this.searchTerm.toLowerCase());
            })
            
        }

    },


});

app.mount('#app');
