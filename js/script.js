

const { createApp } = Vue
// const dt = loxon.DateTime
const app = createApp({
    data() {
        return {
            currentChat: 0,
            newMessage: "",
            searchTerm: "",
            showChat: false,
            showemoji: false,
            showopt: false,
            msgOpt: {
                i: null,
                show: false
            },
            icons: [
                '&#128512;',
                '&#128513;',
                '&#128514;',
                '&#128515;',
                '&#128516;',
                '&#128517;',
                '&#128518;',
                '&#128519;',
                '&#128521;',
                '&#128522;',
                '&#128523;',
                '&#128524;',
                '&#128525;',
                '&#128526;',
                '&#128528;',
                '&#128529;',
                '&#128530;',
                '&#128536;',
                '&#128545;',
                '&#128548;',
                '&#128561;',
                '&#129315;',
                '&#129299;',
                '&#129319;',
                '&#129321;',
                '&#129325;',
                '&#129488;',
                '&#9996;',
                '&#9995;',
                '&#10024;',
                '&#10062;',
                '&#128064;',
                '&#128077;',
                '&#128079;',
                '&#128152;',
                '&#128149;',
                '&#128156;',
                '&#128158;',
                '&#128584;',
                '&#129310;',
                '&#129505;',
                '&#127802;',
                '&#127801;',
                '&#9749;'
            ],
            rndAns: [ 'Non posso', 'Chi sei?', 'Sei andato in palestra?', 'Hai comprato il pane?', 'Giochiamo', 'Ok', 'Ok?', 'Va bene', 'Domani non posso', 'Bella!!!'],
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
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
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
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
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
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received',
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
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',
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
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received',
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
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received',
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent',
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
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received',
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
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent',
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received',
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
                        status: 'sent',
                    }
                );
                setTimeout(() => {

                    returnMsg = this.rndAns[Math.floor(Math.random() * this.rndAns.length)];

                    const d = new Date();
                    let newdate = d.toLocaleString('it-IT');
                    this.contacts[this.currentChat].messages.push(
                        {
                            date: newdate,
                            message: returnMsg,
                            status: 'received',
                        }
                    );
                    this.$nextTick(() => {
                        console.log(this.$refs.msg[this.$refs.msg.length - 1]);
                        const el = this.$refs.msg[this.$refs.msg.length - 1];
                        el.scrollIntoView();
                    });
                }, 1000);
            }
            this.newMessage = '';
        },

        deleteMessage(i) {
            this.contacts[this.currentChat].messages.splice(i, 1);
            this.showOption(i);
        },
        deleteMessages(i) {
            this.contacts[this.currentChat].messages.splice(i);
            this.showOption(i);
        },
        deleteChat(){
            this.contacts.splice(this.currentChat,1);
            this.currentChat = 0;
            this.contacts[this.currentChat].id = this.contacts[0].id;
        },
        showOption(i) {
            if (i === this.msgOpt.i && this.msgOpt.show) {
                this.msgOpt.i = null;
                this.msgOpt.show = false
            } else {
                this.msgOpt.i = i;
                this.msgOpt.show = true
            }

        },
        showEmoji() {
            this.showemoji = !this.showemoji;
        },
        showOpt() {
            this.showopt = !this.showopt;
        },
        addEmoji(i) {
            this.newMessage += this.icons[i];
        },
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
