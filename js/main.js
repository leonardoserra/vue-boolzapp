const DateTime = luxon.DateTime;
const { createApp } = Vue

  createApp({
    data() {
        return {
            // actualTime: DateTime.now().TIME_24_SIMPLE(),
            actualTime: DateTime.now().setLocale("it").toLocaleString(DateTime.TIME_24_SIMPLE),
            actualDate: DateTime.now().setLocale("it").toLocaleString(DateTime.DATE_SHORT),
            newSearch: '',
            newMessage: '',
            selectedConversation: 0,
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    searchVisibility: true,
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: "./img/avatar_2.jpg",
                    searchVisibility: true,
                    visible: false,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                        ],
                },
                {
                    name: 'Samuele',
                    avatar: "./img/avatar_3.jpg",
                    searchVisibility: false,
                    visible: false,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: "./img/avatar_4.jpg",
                    searchVisibility: true,
                    visible: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: "./img/avatar_5.jpg",
                    searchVisibility: true,
                    visible: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: "./img/avatar_8.jpg",
                    searchVisibility: true,
                    visible: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                }
            ]
        }
    },
    
    mounted(){
           
    },

    methods:{
        selectConversation(card, index){
            this.selectedConversation = index;
        },

        showConversation(card, index){
            if(index == this.selectedConversation){
                card.visible = true;
                return 'selected';

            }else{
                card.status = false;
                return '';
            }
        },

        addMessage(place){
            place.push({
                date: this.actualDate +' '+ this.actualTime,
                message: this.newMessage,
                status: 'sent'
            });
            this.newMessage = '';
            
            setTimeout(()=>{
                place.push({
                    date: this.actualDate +' '+ this.actualTime,
                    message: 'ok',
                    status: 'received'
                });
            }, 1000) 
        },
        
        //non funziona se non è case sensitive
        searchFilter(){
            this.contacts.forEach((element)=>{
               if(element.name.includes(this.newSearch)){
                    element.searchVisibility = true;
                }else{
                    element.searchVisibility = false;
                }
            })
           
        }
    }
            
}).mount('#app')