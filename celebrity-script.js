document.addEventListener('DOMContentLoaded', function() {
    /*  A sample element of data to be collected
        { 
            name: '', 
            image: '',
            bio: '',
            birthday: { day: 1, month: 1 }
        },
        */
    const celebrities = [
        {
            name: 'N.T. Rama Rao',
            image: 'https://i.pinimg.com/236x/05/fe/bc/05febc008c74fd5b68ed4c8089417a8a.jpg',
            bio: 'Nandamuri Taraka Rama Rao, popularly known as NTR, was an Indian actor, filmmaker, and politician who founded the Telugu Desam Party and served as the Chief Minister of Andhra Pradesh. His legacy continues to influence Telugu cinema and politics.',
            birthday: {day: 28, month: 5}
        },
        { 
            name: 'Akkineni Nageswara Rao', 
            image: 'https://c.saavncdn.com/artists/Akkineni_Nageswara_Rao_500x500.jpg',
            bio: 'Akkineni Nageswara Rao, affectionately called ANR, was a legendary Indian actor and producer, renowned for his contributions to Telugu cinema. His illustrious career spanned over seven decades, leaving an indelible mark on the industry and earning him numerous accolades and honors.',
            birthday: { day: 20, month: 9 }
        },
        { 
            name: 'Chiranjeevi', 
            image: 'https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20230822140436.jpg',
            bio: 'Chiranjeevi, often referred to as the "Megastar" of Indian cinema, is a celebrated actor, producer, and politician. Renowned for his versatile performances and charismatic presence, he has made significant contributions to Telugu cinema and continues to inspire millions with his work on and off the screen.',
            birthday: { day: 22, month: 8 }
        },
        { 
            name: 'Shobhan Babu', 
            image: 'https://upload.wikimedia.org/wikipedia/en/a/a6/Sobhan_Babu.JPG',
            bio: 'Shobhan Babu was a highly esteemed Indian actor known for his prolific career in Telugu cinema. His exceptional talent, charming demeanor, and memorable performances endeared him to audiences, establishing him as one of the most beloved stars of his time.',
            birthday: { day: 14, month: 1 }
        },
        { 
            name: 'Kamal Haasan', 
            image: 'https://images.filmibeat.com/img/popcorn/profile_photos/kamal-haasan-20221107151916-330.jpg',
            bio: 'Kamal Haasan is a multifaceted Indian actor, filmmaker, and politician, celebrated for his unparalleled versatility and groundbreaking contributions to Indian cinema. His remarkable career spans decades, marked by iconic performances and innovative storytelling, cementing his status as a legendary figure in the film industry.',
            birthday: { day: 7, month: 11 }
        },
        { 
            name: 'Krishna', 
            image: 'https://static.toiimg.com/thumb/msid-69595526,width-400,resizemode-4/69595526.jpg',
            bio: 'Krishna, often referred to as "Superstar Krishna," is a distinguished Indian actor, producer, and politician, known for his significant impact on Telugu cinema. With a career spanning several decades, he has entertained audiences with his charismatic performances and has left an enduring legacy in the world of Indian cinema.',
            birthday: { day: 31, month: 5 }
        },
        { 
            name: 'Kaikala Satyanarayana', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfqc7PGgbBaz7dvN9tg1TKdhh_T0a-l8YKWKoEbLD2uWvLhsKXRmkOvpmhVoiZh63N1vg&usqp=CAU',
            bio: 'Kaikala Satyanarayana was a renowned Indian actor known for his versatile roles in Telugu cinema. His memorable performances and remarkable versatility endeared him to audiences, establishing him as one of the most respected figures in the industry.',
            birthday: { day: 25, month: 7 }
        },
        { 
            name: 'Mohan Babu', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPkYxjZuiA_PZGipXEyYiFGrhH17SMRzWgnvglcPRfAw&s',
            bio: 'Mohan Babu is a prominent Indian actor, producer, and philanthropist, recognized for his remarkable contributions to Telugu cinema. His versatile performances and dedication to his craft have earned him widespread acclaim, solidifying his reputation as one of the most revered figures in the industry.',
            birthday: { day: 19, month: 3 }
        },
        { 
            name: 'Krishnamraju', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH5P36H4w2XmBwXqqR-2_ntte-6W6NfEEoQNe37pjnGdQuBQN2PZzERXLMDOfBawDob4w&usqp=CAU',
            bio: 'Krishnam Raju is a distinguished Indian actor and politician, widely acclaimed for his significant contributions to Telugu cinema. Renowned for his versatility and captivating performances, he has left an indelible mark on the industry and continues to inspire audiences with his enduring legacy.',
            birthday: { day: 20, month: 1 }
        },
        { 
            name: 'Nandamuri Balakrishna', 
            image: 'https://datatrained.com/dt-fun/wp-content/uploads/2023/03/NandaMuri-Balakrishna.jpg',
            bio: ' Nandamuri Balakrishna, is a revered Indian actor and politician, renowned for his impactful performances in Telugu cinema. As a member of the esteemed Nandamuri family, he has carved a niche for himself with his versatile portrayals and has garnered immense admiration from audiences, solidifying his status as a powerhouse in the industry.',
            birthday: { day: 10, month: 6 }
        },
        { 
            name: 'Akkineni Nagarjuna', 
            image: 'https://www.climaxahh.com/wp-content/uploads/2023/11/Nagarjuna.webp',
            bio: 'Nagarjuna, often referred to as the "King" of Telugu cinema, is a highly esteemed Indian actor, producer, and television presenter. With his captivating performances and charismatic screen presence, he has enthralled audiences for decades, earning widespread acclaim and establishing himself as one of the most iconic figures in Indian cinema.',
            birthday: { day: 29, month: 8 }
        },
        { 
            name: 'Venkatesh Daggubati', 
            image: 'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2017/03/venkatesh-1488862355.jpg',
            bio: 'Venkatesh also called Venky, is a revered Indian actor renowned for his versatile performances in Telugu cinema. With a career spanning over three decades, he has captivated audiences with his charm and acting prowess, earning him a special place in the hearts of moviegoers and industry peers alike.',
            birthday: { day: 13, month: 12 }
        },
        { 
            name: 'Rajendra Prasad', 
            image: 'https://images.jdmagicbox.com/events/A422885/A422885_list_20180509161716.jpg',
            bio: 'Actor Rajendra Prasad is a highly respected Indian actor known for his versatile performances in Telugu cinema. With his impeccable comic timing and dramatic skills, he has endeared himself to audiences, earning numerous accolades and establishing a legacy as one of the most beloved actors in the industry.',
            birthday: { day: 19, month: 7 }
        },
        { 
            name: 'Jr. NTR', 
            image: 'https://cdn.siasat.com/wp-content/uploads/2022/08/jr-ntr-health.jpg',
            bio: 'Junior NTR, also known as N. T. Rama Rao Jr., is a dynamic Indian actor, playback singer, and television personality, predominantly working in Telugu cinema. Renowned for his intense performances and charismatic presence on screen, he has carved a niche for himself as one of the leading actors in the industry, continuing the illustrious legacy of his legendary grandfather, Nandamuri Taraka Rama Rao.',
            birthday: { day: 20, month: 5 }
        },
        { 
            name: 'Jagapathi Babu', 
            image: 'https://www.cinejosh.com/newsimg/newsmainimg/happy-birthday-to-jagapathi-babu_b_1202231026.jpg',
            bio: 'Jagapathi Babu is a versatile Indian actor known for his impactful performances in Telugu cinema. With his ability to portray a wide range of characters with depth and conviction, he has garnered widespread acclaim and earned a loyal fan following. His contributions to the industry have cemented his status as one of the most respected actors in Indian cinema.',
            birthday: { day: 12, month: 2 }
        },
        { 
            name: 'Sai Kumar', 
            image: 'https://static.toiimg.com/thumb/imgsize-23456,msid-84789209,width-600,resizemode-4/84789209.jpg',
            bio: "Sai Kumar is a prominent Indian actor known for his compelling performances, particularly in the Telugu film industry. With his commanding screen presence and powerful dialogue delivery, he has carved a niche for himself in the hearts of audiences. Sai Kumar's versatility and dedication to his craft have earned him a reputation as one of the most talented actors in the industry.",
            birthday: { day: 27, month: 7 }
        },
        { 
            name: 'Brahmanandam', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlNzaO95be9J8HDVIMH88mFEnWjloKnh-cn6BTED4tLA&s',
            bio: "Brahmanandam Kanneganti, often referred to simply as Brahmanandam, is an iconic Indian actor known for his unparalleled comedic timing and versatile performances in Telugu cinema. With a career spanning several decades, he has become a household name, entertaining audiences with his hilarious antics and memorable characters. Brahmanandam's contribution to Indian cinema has earned him numerous awards and accolades, solidifying his status as one of the greatest comedians in the industry.",
            birthday: { day: 1, month: 2 }
        },
        { 
            name: 'J.D. Chakravarthi', 
            image: 'https://static.toiimg.com/thumb/msid-96418076,width-400,resizemode-4/96418076.jpg',
            bio: "J.D. Chakravarthy is an acclaimed Indian actor known for his iconic role in the crime film 'Satya'. He has also ventured into directing and filmmaking, leaving a lasting impact on Telugu and Hindi cinema.",
            birthday: { day: 16, month: 4 }
        },
        { 
            name: 'Prakash Raj', 
            image: 'https://images.hindustantimes.com/img/2022/11/15/1600x900/Prakash_Raj_1668488891731_1668488896885_1668488896885.jpg',
            bio: 'Prakash Raj is a versatile Indian actor, director, and producer who has predominantly worked in Tamil, Telugu, Kannada, and Hindi cinema. He is known for his exceptional performances in both negative and character roles, earning critical acclaim and numerous awards throughout his career.',
            birthday: { day: 26, month: 3 }
        },
        { 
            name: 'V.K. Naresh', 
            image: 'https://www.hyderabadevents.com/assets/uploads/6a5731483375f5f2f20028ea71f54b40.jpg',
            bio: 'V.K. Naresh is an Indian actor known for his work in Telugu cinema. He has appeared in numerous films, portraying a variety of characters across different genres. Naresh is recognized for his versatile performances and contribution to the Telugu film industry.',
            birthday: { day: 20, month: 1 }
        },
        { 
            name: 'Pawan Kalyan', 
            image: 'https://rukminim2.flixcart.com/image/850/1000/jjd6aa80/poster/n/q/m/large-vlpers002420-pawan-kalyan-vinyl-poster-original-imaersmyw3nawfgv.jpeg?q=90&crop=false',
            bio: 'Pawan Kalyan is a prominent Indian actor, producer, director, and politician known for his work predominantly in Telugu cinema. He has garnered a massive fan following for his charismatic screen presence and versatile performances. Apart from his successful film career, Kalyan is also actively involved in politics and is the founder of the Jana Sena Party.',
            birthday: { day: 2, month: 9 }
        },
        { 
            name: 'Ravi Teja', 
            image: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/ravi-teja-1848-1647947897.jpg',
            bio: "Ravi Teja, also known as the 'Mass Maharaja', is a popular Indian actor who predominantly works in Telugu cinema. Known for his energetic performances and unique style, he has starred in numerous successful films, earning him a huge fan base. Ravi Teja is celebrated for his contributions to the Telugu film industry.",
            birthday: { day: 26, month: 1 }
        },
        { 
            name: 'Mahesh Babu', 
            image: 'https://www.forbesindia.com/fbimages/900x600/proportional/jpeg/media/images/2015/Dec/topimg_29091_mahesh_babu.jpg',
            bio: 'Mahesh Babu is an Indian actor, producer, and philanthropist known for his work primarily in Telugu cinema. He gained recognition as a child actor in films like "Needa" and later established himself as a leading actor with successful movies such as "Okkadu," "Athadu," and "Pokiri." Babu, often referred to as the "Prince of Tollywood," is known for his charismatic screen presence, versatility, and dedication to his craft. Beyond acting, he is involved in various philanthropic activities and is considered one of the most influential and beloved figures in the Telugu film industry.',
            birthday: { day: 9, month: 8 }
        },
        { 
            name: 'Christopher Nolan', 
            image: 'https://www.hollywoodreporter.com/wp-content/uploads/2023/12/GettyImages-1524043085-copy.jpg?w=1296',
            bio: 'Christopher Nolan is a British-American filmmaker known for his unique storytelling, innovative concepts, and visually stunning films. He gained international fame with movies like "Memento," "The Dark Knight Trilogy," "Inception," and "Interstellar." Nolan\'s films often explore complex themes, nonlinear narratives, and existential questions, captivating audiences with their depth and complexity. He is widely regarded as one of the most influential and visionary directors of his generation, with numerous accolades and a dedicated fan base. Nolan continues to push the boundaries of filmmaking and remains a prominent figure in the industry.',
            birthday: { day: 30, month: 7 }
        },
        { 
            name: 'Ram Gopal Varma', 
            image: 'https://static.tnn.in/thumb/msid-109665328,thumbsize-41432,width-1280,height-720,resizemode-75/109665328.jpg',
            bio: 'Ram Gopal Varma, often referred to as RGV, is an Indian filmmaker known for his work in Hindi and Telugu cinema. He gained recognition for his pioneering contributions to Indian cinema, particularly in the crime and thriller genres. Varma\'s notable films include "Satya," "Rangeela," "Company," and "Sarkar." Known for his bold and experimental approach to filmmaking, Varma has left a significant impact on Indian cinema. Despite facing both criticism and controversy throughout his career, he continues to be a prominent and influential figure in the film industry.',
            birthday: { day: 7, month: 4 }
        },
        { 
            name: 'Trivikram Srinivas', 
            image: 'https://content.tupaki.com/twdata/2020/0220/news/Trivikram-Srinivas-answers-to-all-the-comments--1580709030-156.jpg',
            bio: 'Trivikram Srinivas is an Indian film director and screenwriter known for his work primarily in Telugu cinema. He gained recognition for his unique storytelling style, witty dialogues, and memorable characters. Srinivas\'s notable films include "Nuvve Nuvve," "Athadu," "Julai," and "Ala Vaikunthapurramuloo." Known for his ability to blend entertainment with meaningful narratives, he has garnered a dedicated fan following and critical acclaim. Srinivas continues to be a prominent figure in Telugu cinema, admired for his creativity and storytelling prowess.',
            birthday: { day: 30, month: 7 }
        },
        { 
            name: 'S. S. Rajamouli', 
            image: 'https://1847884116.rsc.cdn77.org/tamil/news/ss-rajamoluli-tn-temples-1172023m1-7dc.jpg',
            bio: 'S. S. Rajamouli is an Indian film director and screenwriter known for his work in Telugu and Indian cinema. He gained international recognition for directing the epic fantasy film series "Baahubali: The Beginning" and "Baahubali 2: The Conclusion," which became the highest-grossing Indian films of all time. Rajamouli\'s vision, storytelling prowess, and ability to create grand cinematic spectacles have earned him widespread acclaim and numerous awards.',
            birthday: { day: 10, month: 10 }
        },
        { 
            name: 'Suriya', 
            image: 'https://www.koimoi.com/wp-content/new-galleries/2022/06/dyk-suriyas-first-job-was-working-as-an-garment-factory-worker-001.jpg',
            bio: 'Suriya is an Indian actor known for his work predominantly in Tamil cinema. He gained recognition for his versatile performances in a wide range of roles, showcasing his acting prowess and dedication to his craft. Suriya\'s notable films include "Kaakha Kaakha," "Ghajini," "Singam,", "24" and "Vikram." Known for his intense performances, charisma, and commitment to socially relevant themes, he has garnered a dedicated fan following and critical acclaim. Suriya continues to be a prominent figure in the Tamil film industry, admired for his talent and contributions to cinema.',
            birthday: { day: 23, month: 7}
        },
        { 
            name: 'Lokesh Kanagaraj', 
            image: 'https://cdn.123telugu.com/content/wp-content/uploads/2023/10/Lokesh-Kanagaraj.jpg',
            bio: 'Lokesh Kanagaraj is an Indian film director and screenwriter known for his work in Tamil cinema. He gained recognition for his debut film "Maanagaram," which was critically acclaimed for its innovative storytelling and engaging narrative. Kanagaraj further solidified his reputation with the action thriller "Kaithi" and the blockbuster "Master," starring Vijay and Vijay Sethupathi. Known for his ability to craft gripping narratives and intense action sequences, he has quickly risen to prominence in the Tamil film industry. Kanagaraj continues to be a promising director, with audiences eagerly awaiting his future projects.',
            birthday: { day: 14, month: 3 }
        },
        { 
            name: 'Robert Pattinson', 
            image: 'https://variety.com/wp-content/uploads/2020/08/batman-3.jpg?w=952',
            bio: 'Robert Pattinson is an English actor known for his diverse roles in film and television. He gained international fame for portraying Edward Cullen in the "Twilight" film series, based on the novels by Stephenie Meyer. Pattinson has since appeared in a variety of critically acclaimed films, including "Cosmopolis," "Good Time," and "The Lighthouse." Known for his versatility, Pattinson continues to challenge himself with complex and diverse roles, earning praise for his performances. He is considered one of the most talented and versatile actors of his generation, with a promising career ahead.',
            birthday: { day: 13, month: 5 }
        },
        { 
            name: 'Rajinikanth', 
            image: 'https://assets.telegraphindia.com/telegraph/2023/Dec/1702379792_rajnikanth-bday.jpg',
            bio: 'Rajinikanth, known as Thalaivar, is an Indian actor and politician famous for his work in Tamil cinema. His notable films include "Baasha" and "Enthiran." With his unique style and charisma, he has amassed a dedicated fan following, making him one of the most influential actors in Indian cinema. Rajinikanth is also involved in philanthropy and has briefly ventured into politics. He remains a legendary figure in the Tamil film industry, admired for his contributions and mass appeal.',
            birthday: { day: 12, month: 12 }
        },
        { 
            name: 'Vijay', 
            image: 'https://static.moviecrow.com/marquee/thalapathy-66-vijay-gears-up-for-new-movie-announcement/186636_thumb_665.jpg',
            bio: 'Vijay is an Indian actor known for his work primarily in Tamil cinema. He gained recognition for his versatile performances in a variety of roles, earning him the title "Thalapathy" among fans. Vijay\'s notable films include "Thuppakki," "Mersal," and "Master." With his charm, charisma, and mass appeal, he has amassed a dedicated fan following and is considered one of the most popular actors in South India. Beyond acting, Vijay is also involved in philanthropic activities, further endearing him to his fans. He continues to be a prominent figure in Tamil cinema, admired for his talent and contributions to the industry.',
            birthday: { day: 22, month: 6 }
        },
        { 
            name: 'Shah Rukh Khan', 
            image: 'https://cdn.123telugu.com/content/wp-content/uploads/2022/12/SHAH-RUKH-KHAN.jpg',
            bio: 'Shah Rukh Khan, often referred to as SRK or the "King of Bollywood," is an Indian actor, film producer, and television personality. He gained widespread recognition and fame for his iconic roles in Hindi cinema, portraying characters that range from romantic heroes to complex protagonists. Some of his notable films include "Dilwale Dulhania Le Jayenge," "Devdas," and "My Name is Khan." With his charm, versatility, and charisma, Shah Rukh Khan has become one of the most influential and beloved figures in Indian entertainment. Beyond his acting career, he is also involved in various philanthropic endeavors and remains a cultural icon both in India and internationally.',
            birthday: { day: 2, month: 11 }
        },
        { 
            name: 'Akshay Kumar', 
            image: 'https://www.hindustantimes.com/ht-img/img/2023/02/23/550x309/akshaykumar_1670166992154_1677156546694_1677156546694.jpg',
            bio: 'Akshay Kumar is an Indian actor, film producer, and martial artist known for his work predominantly in Hindi cinema. He is often referred to as the "Khiladi" of Bollywood due to his association with action-packed roles in the "Khiladi" film series. Kumar is known for his versatility and has portrayed a wide range of characters in genres ranging from action and comedy to drama and romance. Some of his notable films include "Hera Pheri," "Rowdy Rathore," and "Padman." Beyond his acting career, Kumar is also involved in various philanthropic activities and has received several awards for his contributions to Indian cinema.',
            birthday: { day: 9, month: 9 }
        },
        { 
            name: 'Anushka Shetty', 
            image: 'https://static.toiimg.com/photo/msid-72332956/72332956.jpg',
            bio: 'Anushka Shetty is an Indian actress known for her work primarily in Telugu and Tamil cinema. She gained recognition for her roles in movies like "Arundhati," "Baahubali: The Beginning," and "Baahubali 2: The Conclusion." Shetty is admired for her versatility, beauty, and powerful performances, particularly in roles that showcase her acting prowess and screen presence. With her captivating performances and dedication to her craft, she has earned numerous awards and accolades. Anushka Shetty continues to be a prominent figure in the Indian film industry, admired by audiences and filmmakers alike.',
            birthday: { day: 7, month: 11 }
        },
        { 
            name: 'Aishwarya Rai', 
            image: 'https://c.ndtvimg.com/gws/ms/best-of-aishwarya-rais-vintage-beauty/assets/8.jpeg?1667300778',
            bio: 'Aishwarya Rai Bachchan is an Indian actress and former Miss World. She gained international fame for her beauty, elegance, and talent in Bollywood and has also appeared in Hollywood films. Rai\'s notable Bollywood films include "Hum Dil De Chuke Sanam," "Devdas," and "Jodhaa Akbar." She has also starred in Hollywood productions like "Bride & Prejudice" and "The Pink Panther 2." Known for her iconic beauty and versatile acting skills, Rai has received numerous awards and accolades throughout her career. She continues to be one of the most influential and admired actresses in both Indian and international cinema.',
            birthday: { day: 1, month: 11 }
        },
        { 
            name: 'Amitabh Bachchan', 
            image: 'https://img.jagranjosh.com/imported/images/E/GK/Amitabh-Bachchan-list-of-awards.webp',
            bio: 'Amitabh Bachchan, often referred to as the "Shahenshah" or "Big B" of Bollywood, is an Indian actor, film producer, television host, and former politician. He gained legendary status in Indian cinema for his iconic roles in films like "Sholay," "Deewaar," and "Zanjeer." Bachchan\'s powerful performances, baritone voice, and charismatic screen presence have made him one of the most influential and revered figures in Indian cinema. He has received numerous awards, including the Padma Bhushan and Padma Vibhushan, India\'s second and third highest civilian awards, respectively. Beyond acting, Bachchan has also made significant contributions to social causes and remains a cultural icon in India and beyond.',
            birthday: { day: 11, month: 10 }
        },
        { 
            name: 'Tanikella Bharani', 
            image: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/tanikella-bharani-2328-19-09-2017-02-40-27.jpg',
            bio: 'Tanikella Bharani is a versatile Indian actor, screenwriter, dialogue writer, poet, theatre actor, playwright, and director known for his work primarily in Telugu cinema. He has contributed significantly to the film industry with his diverse talents, including acting, writing, and directing. Bharani is acclaimed for his performances and his impactful contributions to Telugu cinema.',
            birthday: { day: 14, month: 7 }
        },
        { 
            name: 'Allari Naresh', 
            image: 'https://www.indiaherald.com/cdn-cgi/image/width=300/images/hp-images/politics/265.jpg',
            bio: 'Allari Naresh is a versatile Indian actor known for his work predominantly in Telugu cinema. He has portrayed a variety of roles, including comedic and dramatic characters, showcasing his talent and versatility. Naresh is celebrated for his contributions to the Telugu film industry.',
            birthday: { day: 30, month: 6 }
        },
        { 
            name: 'Allu Arjun', 
            image: 'https://wowhyderabad.com/wp-content/uploads/2023/12/Allu-Arjun2-2-scaled.jpg',
            bio: "Allu Arjun, also known as the 'Stylish Star', is a prominent Indian actor who primarily works in Telugu cinema. He is renowned for his dynamic performances, exceptional dancing skills, and unique style. Allu Arjun has garnered a massive fan following and has established himself as one of the leading actors in the Telugu film industry.",
            birthday: { day: 8, month: 4 }
        },
        { 
            name: 'Nani', 
            image: 'https://andhrawatch.com/wp-content/uploads/2023/10/Hero-Nani-696x522.jpg',
            bio: 'Nani is a versatile Indian actor who predominantly works in Telugu cinema. He has gained recognition for his natural acting style and ability to portray a wide range of characters with ease. Nani has delivered several acclaimed performances, establishing himself as one of the most talented actors in the Telugu film industry.',
            birthday: { day: 24, month: 2 }
        },
        { 
            name: "Vijay Deverakonda", 
            image: "https://wallpapers.com/images/featured/vijay-devarakonda-4k-9u8z4s1v32x96tkw.jpg",
            bio: "Vijay Deverakonda is a highly acclaimed Indian actor known for his work predominantly in Telugu cinema. He shot to fame with his breakthrough performance in the film 'Arjun Reddy', which earned him widespread acclaim and a huge fan following. Vijay is celebrated for his intense performances and unique style.",
            birthday: { day: 9, month: 5 }
        },
        { 
            name: 'Brahmaji', 
            image: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/brahmaji-7392-1670498255.jpg',
            bio: 'Brahmaji is an Indian actor known for his work predominantly in Telugu cinema. With his versatile acting skills, he has portrayed a wide range of characters in various films, earning him recognition and respect in the industry.',
            birthday: { day: 25, month: 4 }
        },
        { 
            name: 'Gopichand', 
            image: 'https://telugucinema.com/wp-content/uploads/cwv-webp-images/2023/05/gopichand-ramabanam-1024x768.jpg.webp',
            bio: 'Gopichand is a prominent Indian actor known for his work predominantly in Telugu cinema. He has garnered acclaim for his performances in action-packed roles and has established himself as a leading actor in the Telugu film industry.',
            birthday: { day: 12, month: 6 }
        },
        { 
            name: 'Prabhas', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa56kz0p432-HUnHkKkfeWhJNQRV2NFdNP59-UnM7xXQ&s',
            bio: "Prabhas is a renowned Indian actor known for his work primarily in Telugu and Hindi cinema. He gained global recognition for his portrayal of Baahubali in the epic film series 'Baahubali: The Beginning' and 'Baahubali 2: The Conclusion'. Prabhas is celebrated for his dedication to his craft and his charismatic screen presence.",
            birthday: { day: 23, month: 11 }
        },
        { 
            name: 'Ram Charan', 
            image: 'https://www.m9.news/wp-content/uploads/2023/07/Ram-Charan.jpg',
            bio: 'Ram Charan is a prominent Indian actor known for his work predominantly in Telugu cinema. He has delivered several successful films such as Magadheera,Rangasthalam,RRR...and has garnered acclaim for his performances in various roles. Ram Charan is celebrated for his versatility and screen presence.',
            birthday: { day: 27, month: 3 }
        },
        { 
            name: 'Virat Kohli', 
            image: 'https://exchange4media.gumlet.io/news-photo/130825-116704-big.webp?w=400&dpr=2.6',
            bio: 'Virat Kohli is an Indian cricketer and former captain of the Indian national cricket team. Widely regarded as one of the greatest batsmen of all time, Kohli has achieved numerous records and accolades throughout his career. He is known for his aggressive batting style, impeccable technique, and exceptional consistency across all formats of the game. Kohli has led the Indian team to many victories and has earned respect for his leadership on and off the field. He has received numerous awards, including the Sir Garfield Sobers Trophy for ICC Cricketer of the Year multiple times. Kohli continues to be a dominant force in international cricket and a role model for aspiring cricketers around the world.',
            birthday: { day: 5, month: 11 }
        },
        { 
            name: 'M.S. Dhoni', 
            image: 'https://assets.telegraphindia.com/telegraph/2024/Jan/1704461025_dhoni.jpg',
            bio: 'Mahendra Singh Dhoni, commonly known as MS Dhoni, is a former Indian cricketer and former captain of the Indian national cricket team. He is considered one of the greatest captains in the history of cricket, known for his calm demeanor, tactical acumen, and ability to finish matches under pressure. Dhoni is also regarded as one of the best wicket-keepers in the world and is known for his lightning-fast stumpings and sharp reflexes behind the wickets. He led India to numerous victories, including winning the ICC Cricket World Cup in 2011 and the ICC T20 World Cup in 2007. Dhoni\'s leadership and contributions to Indian cricket have earned him immense respect and admiration from fans and fellow cricketers alike.',
            birthday: { day: 7, month: 7 }
        },
        { 
            name: 'Rohit Sharma', 
            image: 'https://static.india.com/wp-content/uploads/2023/11/MixCollage-22-Nov-2023-06-56-PM-283.jpg?impolicy=Medium_Widthonly&w=400',
            bio: 'Rohit Sharma is an Indian cricketer known for his exceptional batting skills and leadership abilities. He is considered one of the most talented and successful batsmen in contemporary cricket. Sharma is known for his elegant stroke play, particularly in limited-overs cricket, where he has amassed numerous records, including the highest individual score in One Day Internationals (ODIs) with 264 runs. He has also achieved success as the vice-captain of the Indian cricket team and as the captain of the Mumbai Indians franchise in the Indian Premier League (IPL), leading the team to multiple IPL titles. Sharma\'s consistency, versatility, and ability to perform under pressure have made him a key player in Indian cricket and a beloved figure among fans.',
            birthday: { day: 30, month: 4 }
        },
        { 
            name: 'A. P. J. Abdul Kalam', 
            image: 'https://hips.hearstapps.com/hmg-prod/images/president-apj-abdul-kalam-during-a-education-summit-news-photo-1701184753.jpg',
            bio: 'Dr. APJ Abdul Kalam was the 11th President of India from 2002 to 2007. Known as the "Missile Man of India," he played a crucial role in India\'s space and missile programs. Kalam inspired millions with his vision for a developed India and dedication to science, education, and youth empowerment. His humility, integrity, and commitment to serving the nation made him a revered national icon even after his presidency.',
            birthday: { day: 15, month: 10 }
        },
        { 
            name: 'R. Madhavan', 
            image: 'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/08/08/715348-r-madhavan.jpg',
            bio: 'R. Madhavan is an Indian actor known for his work in Hindi and Tamil cinema. He gained recognition for his performances in films like "Alaipayuthey," "Rang De Basanti," and "3 Idiots." Madhavan is admired for his versatility, charm, and ability to portray a variety of characters with depth and authenticity. With his impressive acting skills and captivating screen presence, he has earned a dedicated fan following and critical acclaim. Madhavan continues to be a prominent figure in Indian cinema, known for his contributions to both Bollywood and South Indian cinema.',
            birthday: { day: 1, month: 6 }
        },
        { 
            name: 'Tom Holland', 
            image: 'https://variety.com/wp-content/uploads/2023/10/GettyImages-1495259778-e1696875689554.jpg?w=1024',
            bio: 'Tom Holland is an English actor known for his portrayal of Spider-Man in the Marvel Cinematic Universe (MCU). He gained widespread recognition for his role as Peter Parker / Spider-Man, starting with "Captain America: Civil War" and continuing in subsequent MCU films like "Spider-Man: Homecoming," "Spider-Man: Far From Home," and "Spider-Man: No Way Home." Holland is admired for his youthful charm, agility, and ability to bring depth to the iconic superhero character. Beyond his role as Spider-Man, he has also appeared in other films like "The Impossible" and "Cherry," showcasing his versatility as an actor. Holland continues to be a rising star in Hollywood, with a promising career ahead of him.',
            birthday: { day: 1, month: 6 }
        },
        { 
            name: 'Venkaiah Naidu', 
            image: 'https://img.etimg.com/thumb/width-1200,height-900,imgsize-70508,resizemode-75,msid-91618219/news/defence/be-prepared-to-repel-security-threat-develop-indian-military-into-future-force-vice-president-m-venkaiah-naidu-to-defence-forces.jpg',
            bio: 'Venkaiah Naidu is an Indian politician serving as the 13th Vice President of India since 2017. He is also the Chairman of the Rajya Sabha, the upper house of the Indian Parliament. Naidu has been associated with the Bharatiya Janata Party (BJP) for many years and has held various positions within the party and the government. Prior to his role as Vice President, he served as the Minister of Housing and Urban Poverty Alleviation, Urban Development, and Information and Broadcasting in the Government of India. Naidu is known for his oratory skills, leadership qualities, and dedication to public service.',
            birthday: { day: 1, month: 7 }
        },
        { 
            name: 'Diana, Princess of Wales', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThr5FD70fxXLQXN_lIJpSVv_1uxKSwLVODlQ&usqp=CAU',
            bio: 'Diana, Princess of Wales, was a member of the British royal family. Born Diana Spencer, she became internationally known upon her marriage to Charles, Prince of Wales, in 1981. Diana was admired for her humanitarian work, including her efforts to raise awareness about issues such as HIV/AIDS, landmines, and mental health. She was also known for her philanthropic endeavors, particularly her involvement in charities supporting children and those affected by poverty and illness. Diana\'s compassion, grace, and warmth endeared her to people around the world, earning her the title "the People\'s Princess." Her tragic death in 1997 sparked an outpouring of grief worldwide, and her legacy continues to inspire charitable work and advocacy today.',
            birthday: { day: 1, month: 7 }
        },
        { 
            name: 'Mrunal Thakur', 
            image: 'https://www.deccanchronicle.com/h-upload/2024/04/05/1082579-mrunalthakur.webp',
            bio: 'Mrunal Thakur is an Indian actress known for her work in Hindi and Marathi cinema, as well as in television. She gained recognition for her role as Bulbul in the popular television series "Kumkum Bhagya." Thakur has since transitioned to the big screen, starring in films like "Love Sonia," "Super 30," and "Toofaan." Known for her versatility and acting prowess, she has earned critical acclaim and a dedicated fan following. Thakur continues to impress audiences with her performances and remains a promising talent in the Indian film industry.',
            birthday: { day: 1, month: 8 }
        },
        { 
            name: 'Taapsee Pannu', 
            image: 'https://assets.gqindia.com/photos/5ddbd0136cce8200089fcc6c/4:3/w_1440,h_1080,c_limit/Taapsee%20Pannu%20reveals%20her%20fitness%20mantra%20&%20also%20spills%20the%20tea%20on%20her%20most%20difficult%20on-screen%20transformation%20yet.jpg',
            bio: 'Taapsee Pannu is an Indian actress known for her work predominantly in Hindi, Telugu, and Tamil cinema. She made her acting debut in the Telugu film "Jhummandi Naadam" and gained recognition with her performance in the Tamil film "Aadukalam," for which she won a National Film Award. Pannu has since appeared in numerous successful films across various languages, including "Pink," "Badla," and "Thappad." Known for her strong performances and versatility, she has earned critical acclaim and several awards for her acting. Pannu is also known for her outspokenness on social issues and gender equality, making her a prominent figure in the Indian film industry.',
            birthday: { day: 1, month: 8 }
        },
        { 
            name: 'Zendaya', 
            image: 'https://www.instyle.com/thmb/2GdPX2C8dK7-g1vQ6HQ8Q9mf8DI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1497018169-66a3dafef5bb4e0bb1d9e2a063f19e61.jpg',
            bio: 'Zendaya is an American actress, singer, and fashion icon. She gained prominence for her role as Rocky Blue in the Disney Channel series "Shake It Up." Zendaya further rose to fame with her portrayal of Rue Bennett in the HBO series "Euphoria," for which she received critical acclaim and won an Emmy Award. She has also appeared in blockbuster films like "Spider-Man: Homecoming," "Spider-Man: Far From Home," and "Dune." Known for her talent, style, and activism, Zendaya has become a role model for many, using her platform to advocate for diversity, inclusion, and social justice. She continues to be a prominent figure in Hollywood, admired for her versatility and influence both on and off the screen.',
            birthday: { day: 1, month: 9 }
        },
        { 
            name: 'Brie Larson', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf_QfL-CIsYyZvG8VQg148cGwlrtZQLR4_sw&usqp=CAU',
            bio: 'Brie Larson is an American actress and filmmaker known for her versatile performances in film and television. She gained widespread recognition for her role as Ma in the critically acclaimed film "Room," for which she won the Academy Award for Best Actress. Larson has also appeared in blockbuster movies like "Captain Marvel," "Kong: Skull Island," and "Avengers: Endgame," portraying the character Carol Danvers / Captain Marvel in the Marvel Cinematic Universe. Known for her talent, intelligence, and advocacy for diversity and inclusion in Hollywood, Larson continues to be a leading figure in the entertainment industry, inspiring audiences with her work on and off the screen.',
            birthday: { day: 1, month: 10 }
        },
        { 
            name: 'Sivamani', 
            image: 'https://static.toiimg.com/thumb/msid-96434620,width-1280,resizemode-4/96434620.jpg',
            bio: 'Sivamani, whose full name is Anandan Sivamani, is an Indian percussionist known for his mastery of the drums and other percussion instruments. He has collaborated with numerous Indian and international musicians across various genres, including film music, fusion, and world music. Sivamani\'s energetic and innovative style of playing has earned him acclaim and admiration from audiences worldwide. He is also known for his live performances, where he showcases his exceptional skill and creativity on stage. Sivamani continues to be a prominent figure in the music industry, known for his contributions to Indian music and his collaborations with artists from around the globe.',
            birthday: { day: 1, month: 12 }
        },
        { 
            name: 'Anirudh Ravichander', 
            image: 'https://www.deccanchronicle.com/h-upload/2024/01/29/500x300_1073128-anirudh.webp',
            bio: 'Anirudh Ravichander is an Indian music composer and singer known for his work predominantly in Tamil cinema. He gained widespread recognition with his debut film soundtrack for "3," which included the viral hit song "Why This Kolaveri Di." Anirudh has since composed music for numerous successful films, including "Ethir Neechal," "Maan Karate," and "Kaththi." Known for his catchy tunes, innovative compositions, and youthful energy, he has amassed a dedicated fan following and earned several awards for his music. Anirudh\'s versatile style spans across various genres, from peppy dance numbers to soulful melodies, making him one of the most sought-after music composers in the South Indian film industry.',
            birthday: { day: 16, month: 10 }
        },
        { 
            name: 'Narendra Modi', 
            image: 'https://www.hindustantimes.com/ht-img/img/2024/02/25/550x309/Prime-Minister-Narendra-Modi-will-virtually-inaugu_1708828514424_1708828584179.jpg',
            bio: 'Narendra Modi is an Indian politician serving as the 14th Prime Minister of India since May 2014. He is a member of the Bharatiya Janata Party (BJP) and the Rashtriya Swayamsevak Sangh (RSS). Modi previously served as the Chief Minister of Gujarat from 2001 to 2014. As Prime Minister, he has focused on various initiatives such as Swachh Bharat Abhiyan (Clean India Mission), Make in India, and Digital India. Modi\'s policies and leadership style have been both praised and criticized, and he remains a polarizing figure in Indian politics.',
            birthday: { day: 17, month: 9 }
        },
        //Month January
        { 
            name: 'Satyendra Nath Bose', 
            image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201802/satyendranath-bose-650_071717051844.jpeg?size=690:388',
            bio: "Satyendra Nath Bose was an Indian physicist known for his work in theoretical physics, particularly in quantum mechanics. Born on January 1, 1894, in Calcutta, British India, he collaborated with Albert Einstein to develop Bose-Einstein statistics, laying the foundation for understanding bosons' behavior. Bose's legacy continues to inspire physicists worldwide.",
            birthday: { day: 1, month: 1 }
        },
        { 
            name: 'Vidya Balan', 
            image: 'https://images.indianexpress.com/2017/11/vidya-balan-7592.jpg?w=414',
            bio: 'Vidya Balan is a highly acclaimed Indian actress known for her powerful performances and choice of challenging roles. She has received numerous awards, including a National Film Award and multiple Filmfare Awards, for her outstanding contributions to Indian cinema.',
            birthday: { day: 1, month: 1 }
        },
        { 
            name: 'Sonali Bendre', 
            image: 'https://i.pinimg.com/564x/de/be/b0/debeb08e31ab2b4edc21e391e0aef8d7.jpg',
            bio: "Sonali Bendre is an Indian actress known for her work in Hindi films. Born on January 1, 1975, in Mumbai, India, she has appeared in numerous successful movies and has received critical acclaim for her performances. Bendre is also known for her contributions to television and as a former model.",
            birthday: { day: 1, month: 1 }
        },
        { 
            name: 'Kate Bosworth', 
            image: 'https://hips.hearstapps.com/hmg-prod/images/kate-bosworth-attends-netflixs-special-screening-of-along-news-photo-1686737657.jpg?crop=0.875xw:0.648xh;0.0443xw,0.0631xh&resize=1200:*',
            bio: "Kate Bosworth is an American actress known for her work in film and television. Born on January 2, 1983, in Los Angeles, California, she gained recognition for her roles in movies such as 'Blue Crush' and 'Superman Returns'. Bosworth is admired for her versatile performances and her advocacy work.",
            birthday: { day: 2, month: 1 }
        },
        { 
            name: 'Lissy', 
            image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Lissy_CCL_Season_4_%28cropped%29.jpg',
            bio: "Lissy is a renowned Indian actress who primarily worked in Malayalam cinema. Born on January 1, 1967, in Chennai, India, she has appeared in numerous successful films during the 1980s and 1990s. Lissy is admired for her versatile performances and has won several awards for her contributions to Indian cinema.",
            birthday: { day: 2, month: 1 }
        },
        { 
            name: 'Bellamkonda Sreenivas', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRykFpKSX7-k2jQXWif_NYSIdVlca7vgBYs8lilpHGs-DfVj8MkFWBQZotv9pIjJ-vFYrQ&usqp=CAU',
            bio: "Bellamkonda Sreenivas is an Indian actor who predominantly works in Telugu cinema. Born on January 3, 1993, in Guntur, Andhra Pradesh, India, he made his acting debut with the film 'Alludu Seenu' and has since appeared in several movies. Sreenivas is known for his energetic performances and has garnered a significant fan following.",
            birthday: { day: 3, month: 1 }
        },
        {
            name: 'Mel Gibson',
            image: 'https://www.portrait.gov.au/files/5/6/6/f/i5444-th.jpg',
            bio: "Mel Gibson is an Australian-American actor, director, and producer. Born on January 3, 1956, in Peekskill, New York, USA, he gained international fame for his roles in iconic films such as 'Braveheart', 'Lethal Weapon', and 'Mad Max'. Gibson is also an accomplished filmmaker, having directed and produced several critically acclaimed movies.",
            birthday: { day: 3, month: 1}
        },
        { 
            name: 'Jiiva', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBSxWVzoSBXP19ayAN7jo6DaENr8hqg5QgAql4mmoQrQ&s',
            bio: '"Jiiva is an Indian actor known for his work primarily in Tamil cinema. Born on January 4, 1984, in Chennai, Tamil Nadu, India, he has appeared in numerous successful films and has garnered acclaim for his performances. Jiiva is admired for his versatility and has established himself as a prominent actor in the Tamil film industry."',
            birthday: { day: 4, month: 1 }
        },
        { 
            name: 'Issac Newton', 
            image: 'https://assets.editorial.aetnd.com/uploads/2015/03/isaac-newton-gettyimages-56458980.jpg',
            bio: "Isaac Newton was an English mathematician, physicist, and astronomer, widely recognized as one of the most influential scientists of all time. Born on January 4, 1643, his groundbreaking work laid the foundation for classical mechanics and universal gravitation. Newton's laws of motion and law of universal gravitation revolutionized our understanding of the natural world.",
            birthday: { day: 4, month: 1 }
        },
        { 
            name: 'Deepika Padukone', 
            image: 'https://images.prestigeonline.com/wp-content/uploads/sites/5/2021/07/01114931/Deepika-Padukone_Happy-Diamonds-11-1-1144x900.jpg',
            bio: "Deepika Padukone is a highly acclaimed Indian actress who has worked in Hindi cinema. Born on January 5, 1986, she is known for her versatility and grace, delivering several memorable performances and receiving numerous awards, including three Filmfare Awards.",
            birthday: { day: 5, month: 1 }
        },
        { 
            name: 'Mamata Banerjee', 
            image: 'https://bsmedia.business-standard.com/_media/bs/img/article/2023-08/25/full/1692964344-2782.jpg',
            bio: "Mamata Banerjee is an Indian politician serving as the Chief Minister of West Bengal. Born on January 5, 1955, in Kolkata, India, she is the founder and chairperson of the All India Trinamool Congress (TMC) party. Banerjee has been a prominent figure in Indian politics for decades and has played a key role in West Bengal's political landscape.",
            birthday: { day: 5, month: 1 }
        },
        
        { 
            name: 'A. R. Rahman', 
            image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/ar-raman-birthday-fansjpg-013213-16x9_0.jpg?VersionId=8IdNql2sscklQZKA_KJCooG3f5taeFk_',
            bio: "A.R. Rahman is an Indian composer, singer-songwriter, and music producer known for his work in the Indian film industry and globally. Born on January 6, 1967, in Chennai, India, Rahman has won numerous awards, including two Academy Awards, two Grammy Awards, and a BAFTA Award, for his outstanding contributions to music. He is celebrated for his unique blend of Indian classical music with various musical genres, creating timeless compositions that resonate with audiences worldwide.",
            birthday: { day: 6, month: 1 }
        },
        { 
            name: 'Rowan Atkinson', 
            image: 'https://my.kumonglobal.com/wp-content/uploads/2022/03/Learn-from-Rowan-Atkinson_Kumon-Malaysia_530x530_NewsThumbnail.jpg',
            bio: "Rowan Atkinson is a British actor, comedian, and writer known for his iconic character Mr. Bean. Born on January 6, 1955, in Consett, County Durham, England, he has entertained audiences worldwide with his comedic talents. Atkinson has appeared in numerous films and television shows, but he is best known for his roles in 'Mr. Bean' and 'Blackadder'. He is celebrated for his physical comedy and impeccable timing, earning him a place among the most beloved comedians of all time.",
            birthday: { day: 6, month: 1 }
        },
        { 
            name: 'Kapil Dev', 
            image: 'https://assets.telegraphindia.com/telegraph/0907eae7-d8f7-480a-94e6-b853c97da352.jpg',
            bio: 'Kapil Dev is a former Indian cricketer and captain, renowned for leading India to victory in the 1983 Cricket World Cup. Born on January 6, 1959, in Chandigarh, he is celebrated for his exceptional cricketing skills and leadership.',
            birthday: { day: 6, month: 1 }
        },
        { 
            name: 'Irrfan Khan', 
            image: 'https://img.jagranjosh.com/imported/images/E/GK/Irrfan_khan_passes_away.webp',
            bio: 'Irrfan Khan was an acclaimed Indian actor known for his versatile performances in both Bollywood and Hollywood. Born on January 7, 1967, in Jaipur, India, he garnered widespread acclaim for his portrayal of complex characters and his ability to bring depth to every role.',
            birthday: { day: 7, month: 1 }
        },
        { 
            name: 'Lewis Hamilton', 
            image: 'https://e3.365dm.com/24/02/2048x1152/skynews-lewis-hamilton-f1-formula-one_6440203.jpg',
            bio: 'Lewis Hamilton is a British racing driver who has achieved multiple Formula One World Championships. Born on January 7, 1985, in Stevenage, England, he is celebrated for his remarkable talent and success in the world of motorsport.',
            birthday: { day: 7, month: 1 }
        },
        { 
            name: 'Yash', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoznEiXojmR623V2Ev3KFXP5L9exYLFYvurGtdZUKGQw&s',
            bio: 'Yash, the actor renowned for his role in the film "KGF: Chapter 1," is celebrated for his impactful performances in Kannada cinema. Born on January 8, 1986, in Bhuvanahalli, Karnataka, India, he has garnered immense popularity for his portrayal of rugged characters with depth and intensity.',
            birthday: { day: 8, month: 1 }
        },
        { 
            name: 'Stephen Hawking', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3csvRekBjdaO60dLH7qtPuVnwy8WsmQpPDpF9kxiIqw&s',
            bio: 'Stephen Hawking was a renowned British theoretical physicist, cosmologist, and author, known for his groundbreaking work in the study of black holes and the theory of general relativity. Born on January 8, 1942, in Oxford, England, his contributions to science, particularly in the fields of theoretical physics and cosmology, have left an indelible mark on our understanding of the universe.',
            birthday: { day: 8, month: 1 }
        },
        { 
            name: 'Kim Jong-un', 
            image: 'https://images.firstpost.com/uploads/2024/05/Kim-Jong-un-pleasure-squad-KCNA-2024-05-55c94923719c5fdae8a4e3ff81996416.jpg?im=FitAndFill=(596,336)',
            bio: 'Kim Jong-un is the Supreme Leader of North Korea, assuming power in 2011 after the death of his father, Kim Jong-il. Born on January 8, 1983 (exact date unconfirmed), in Pyongyang, North Korea, he has been a controversial figure, known for his authoritarian rule and pursuit of nuclear weapons.',
            birthday: { day: 8, month: 1 }
        },
        { 
            name: 'Farhan Akhtar', 
            image: 'https://static.india.com/wp-content/uploads/2015/03/farhan-akhtar.jpg',
            bio: 'Farhan Akhtar is a prominent Indian actor, filmmaker, and singer-songwriter, known for his contributions to Bollywood cinema. Born on January 9, 1974, in Mumbai, India, he has gained acclaim for his versatile performances, impactful storytelling, and musical talent.',
            birthday: { day:9, month: 1 }
        },
        { 
            name: 'Raghava Lawrence', 
            image: 'https://cinitalk.com/images/gallery-actress-movie/raghava-lawrence-2021-04-22-07-10-32-6.jpg',
            bio: 'Raghava Lawrence is an acclaimed Indian choreographer, actor, and filmmaker known for his work in the Tamil film industry. Born on January 9, 1976, in Chennai, India, he is celebrated for his innovative choreography and his contributions to Tamil cinema as an actor and director.',
            birthday: { day: 9, month: 1 }
        },
        { 
            name: 'Hrithik Roshan', 
            image: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/238324_v9_bb.jpg',
            bio: 'Hrithik Roshan is a highly acclaimed Indian actor known for his versatile performances in Bollywood films. Born on January 10, 1974, in Mumbai, India, he has garnered widespread acclaim for his exceptional acting skills, charismatic screen presence, and dancing prowess.',
            birthday: { day: 10, month: 1 }
        },
        { 
            name: 'Sukumar', 
            image: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/sukumar-bandreddi-2278-1671448479.jpg',
            bio: 'Sukumar is a prominent Indian film director and screenwriter, primarily known for his work in the Telugu film industry. Born on January 10, 1970, he is celebrated for his unique storytelling style and innovative filmmaking techniques. Sukumar has directed several successful films and is revered for his ability to portray complex characters and themes on screen.',
            birthday: { day: 10, month: 1 }
        },
        { 
            name: 'Shweta Basu Prasad', 
            image: 'https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2017/06/07/Pictures/_402a0886-4b6e-11e7-942b-1b07039b2a8c.jpg',
            bio: 'Shweta Basu Prasad is a talented Indian actress known for her work in Hindi, Telugu, and Bengali cinema. Born on January 11, 1991, in Jamshedpur, India, she has received critical acclaim for her performances in films and television shows. Shweta is admired for her versatility and natural acting ability, making her one of the promising young talents in the Indian entertainment industry.',
            birthday: { day: 11, month: 1 }
        },
        { 
            name: 'Rahul Dravid', 
            image: 'https://images.hindustantimes.com/img/2023/01/11/1600x900/dravid-coach-new-getty_1673429277560_1673429285201_1673429285201.jpg',
            bio: 'Rahul Dravid, also known as "The Wall," is a legendary Indian cricketer and former captain of the Indian national cricket team. Born on January 11, 1973, in Indore, India, he is widely regarded as one of the greatest batsmen in the history of cricket. Dravid is admired for his impeccable technique, resilience, and sportsmanship, earning him respect and admiration from fans and players alike worldwide.',
            birthday: { day: 11, month: 1 }
        },
        { 
            name: 'Swami Vivekananda', 
            image: 'https://cdn1.byjus.com/wp-content/uploads/2018/11/free-ias-prep/2018/07/04051739/swami.jpg',
            bio: "Swami Vivekananda was an Indian Hindu monk. He was a key figure in the introduction of Indian philosophies of Vedanta and Yoga to the Western world and was credited with raising interfaith awareness, bringing Hinduism to the status of a major world religion in the late 19th century. He was a major force in the revival of Hinduism in India and contributed to the concept of nationalism in colonial India.",
            birthday: { day: 12, month: 1 }
        },
        { 
            name: 'Jeff Bezos', 
            image: 'https://hips.hearstapps.com/hmg-prod/images/jeff-bezos-attends-the-lord-of-the-rings-the-rings-of-power-news-photo-1684851576.jpg?crop=1.00xw:0.862xh;0,0.0207xh&resize=1200:*',
            bio: "Jeff Bezos is an American entrepreneur, media proprietor, investor, and commercial astronaut. He is the founder, executive chairman, and former president and CEO of Amazon. With a net worth of over $100 billion, he is considered one of the richest people in the world.",
            birthday: { day: 12, month: 1 }
        },
        { 
            name: 'Zayn Malik', 
            image: 'https://media.glamour.com/photos/56958105085ae0a85037019e/master/pass/entertainment-2015-03-zayn-malik-one-direction-main.jpg',
            bio: "Zayn Malik is an English singer and songwriter. He rose to fame as a member of the boy band One Direction. Malik left the group in 2015 to pursue a solo music career. He has released several successful solo albums and singles and has become known for his distinctive vocal style and fashion sense.",
            birthday: { day: 12, month: 1 }
        },
        { 
            name: 'Liam Hemsworth', 
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Liam_Hemsworth_by_Gage_Skidmore.jpg/170px-Liam_Hemsworth_by_Gage_Skidmore.jpg',
            bio: "Liam Hemsworth is an Australian actor. He is known for his roles in films such as 'The Hunger Games' series, 'The Last Song', and 'Independence Day: Resurgence'. Hemsworth has received several awards and nominations for his performances, and he is also recognized for his humanitarian work.",
            birthday: { day: 13, month: 1 }
        },
        { 
            name: 'Michael Peña', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA8M2kFlk5RAyPVEBl9ifKEZduLeY2vVx_ynFQy7yQBw&s',
            bio: "Michael Peña is an American actor and musician. He has appeared in numerous films, including 'Crash', 'End of Watch', 'Ant-Man', and 'American Hustle'. Peña is known for his versatile performances and has received critical acclaim for his work in both drama and comedy.",
            birthday: { day: 13, month: 1 }
        },
        { 
            name: 'Albert Schweitzer', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSL4b5PhK2LnlsndEWbrZevETfwC267uxirgOo2M8HKg&s',
            bio: "Albert Schweitzer was a French-German theologian, organist, writer, humanitarian, philosopher, and physician. He is best known for his philosophy of 'Reverence for Life', which emphasized the importance of respecting and caring for all forms of life. Schweitzer received the Nobel Peace Prize in 1952 for his humanitarian work in Africa.",
            birthday: { day: 14, month: 1 }
        },
        { 
            name: 'Madhuri Dixit', 
            image: 'https://media.vogue.in/wp-content/uploads/2023/10/Snapinsta.app_352378770_249780821071135_3347589348233052633_n_1080-1-1-1920x1080.jpg',
            bio: "Madhuri Dixit is an Indian actress, producer, and television personality. She is one of the most popular and influential actresses in Indian cinema, known for her versatility and expressive performances. Dixit has received numerous awards for her work, including six Filmfare Awards, and has appeared in over 70 Bollywood films.",
            birthday: { day: 15, month: 5 }
        },
        { 
            name: 'Ram Pothineni', 
            image: 'https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2016/09/28/hero-ram-interview-hyper-movie-stills69.jpg?quality=80&zoom=1&ssl=1',
            bio: "Ram Pothineni is an Indian film actor known for his work in Telugu cinema. He made his acting debut in the 2006 film 'Devadasu', which earned him a Filmfare Award for Best Male Debut – South. Pothineni has since appeared in numerous successful films and has established himself as one of the leading actors in Telugu cinema.",
            birthday: { day: 15, month: 5 }
        },
        { 
            name: 'Neil Nitin Mukesh', 
            image: 'https://pbs.twimg.com/profile_images/1286535840781357057/bbpg5V5V_400x400.jpg',
            bio: "Neil Nitin Mukesh is an Indian actor known for his work in Hindi films. He made his acting debut in the 2007 film 'Johnny Gaddaar' and has since appeared in various successful movies. Mukesh comes from a prominent Bollywood family and has garnered critical acclaim for his performances.",
            birthday: { day: 15, month: 1 }
        },
        { 
            name: 'Vijay Sethupathi', 
            image: 'https://images.filmibeat.com/img/popcorn/profile_photos/vijay-sethupathi-20230420112846-28201.jpg',
            bio: "Vijay Sethupathi is an Indian actor, producer, and screenwriter who predominantly works in Tamil cinema. He gained popularity for his versatile performances and unconventional roles in films. Sethupathi has received several awards and nominations for his work, and he is considered one of the most talented actors in Indian cinema.",
            birthday: { day: 16, month: 1 }
        },
        { 
            name: 'Sidharth Malhotra', 
            image: 'https://images.news18.com/ibnlive/uploads/2024/03/sidharth-malhotra-1-2024-03-758734eeb3848a6f7297fc4ac19cd6ee.jpg?impolicy=website&width=640&height=480',
            bio: 'Sidharth Malhotra: Indian actor and former model known for his work in Hindi cinema, gaining fame with his debut in "Student of the Year" and subsequent roles in various films.',
            birthday: { day: 16, month: 1 }
        },
        { 
            name: 'Jim Carey', 
            image: 'https://i.guim.co.uk/img/media/01f5a19891a82b24fdbf635f272f6a8b0f51680b/485_39_1692_1015/master/1692.jpg?width=1200&quality=85&auto=format&fit=max&s=cf302141ef008b77134d2371938d1cb0',
            bio: 'Jim Carrey is a Canadian-American actor, comedian, and writer known for his energetic performances and versatile roles in comedy films such as "Ace Ventura: Pet Detective," "The Mask," and "Dumb and Dumber."',
            birthday: { day: 17, month: 1 }
        },
        { 
            name: 'Muhammad Ali', 
            image: 'https://hips.hearstapps.com/hmg-prod/images/muhammad_ali_photo_by_stanley_weston_archive_photos_getty_482857506.jpg',
            bio: 'Muhammad Ali is an American professional boxer, activist, and philanthropist widely regarded as one of the greatest athletes of the 20th century, known for his unmatched charisma, boxing prowess, and outspoken advocacy for civil rights and social justice.',
            birthday: { day: 17, month: 1 }
        },
        { 
            name: 'Monica Bedi', 
            image: 'https://reservemystar.com/wp-content/uploads/2021/01/Monica-Bedi.jpg',
            bio: 'Monica Bedi is an Indian actress and television presenter known for her work in Hindi and Telugu cinema, rising to fame for her roles in films such as "Jodi No.1" and "Tirke." ',
            birthday: { day: 18, month: 1 }
        },
        { 
            name: 'Varun Tej', 
            image: 'https://m.economictimes.com/thumb/msid-94782509,width-1200,height-900,resizemode-4,imgsize-42606/varun-tej.jpg',
            bio: 'Varun Tej is an Indian actor known for his work in Telugu cinema, making his debut with the film "Mukunda" and gaining acclaim for his performances in movies like "Kanche" and "Fidaa." ' ,
            birthday: { day: 19, month: 1 }
        },
        { 
            name: 'Sushant Singh Rajput', 
            image: 'https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200614084611-sushant-singh-rajput-restricted.jpg',
            bio: 'Sushant Singh Rajput is an Indian actor known for his versatile performances in Hindi cinema, rising to prominence with his portrayal of Manav in the television series "Pavitra Rishta" and starring in films such as "Kai Po Che!", "MS Dhoni: The Untold Story," and "Chhichhore."',
            birthday: { day: 21, month: 1 }
        },
        { 
            name: 'Santhanam', 
            image: 'https://images.hindustantimes.com/rf/image_size_640x362/HT/p1/2014/04/17/Incoming/Pictures/1209243_Wallpaper2.jpg',
            bio: 'Santhanam is an Indian actor and comedian known for his work predominantly in Tamil cinema, recognized for his impeccable comic timing and memorable performances in films such as "Boss Engira Bhaskaran," "Oru Kal Oru Kannadi," and "Dhilluku Dhuddu."',
            birthday: { day: 21, month: 1 }
        },
        { 
            name: 'Bhuvan Bam', 
            image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202305/bhuvan_bam_to_play_the_lead_in_an_upcoming_action_thriller_film-sixteen_nine.jpg?VersionId=QykVGnkdwgPPXNIrsTaES2K4hr6evWhS',
            bio: 'Bhuvan Bam is an Indian comedian, singer-songwriter, and YouTube personality known for his popular YouTube channel "BB Ki Vines," where he creates humorous sketches and music videos, garnering a massive following and widespread acclaim for his comedic talent and creativity.',
            birthday: { day: 22, month: 1 }
        },
        { 
            name: 'Gabriel Macht', 
            image: 'https://parade.com/.image/t_share/MTkwNTc4NjkxNjMyNjcwNTg4/gabriel-macht-ftr.jpg',
            bio: 'Gabriel Macht is an American actor known for his role as Harvey Specter in the television series "Suits," acclaimed for his charismatic portrayal of the confident and sharp-witted lawyer.',
            birthday: { day: 22, month: 1 }
        },
        { 
            name: 'Subhas Chandra Bose', 
            image: 'https://cdn.britannica.com/37/171337-004-0B980E9D/Subhas-Chandra-Bose-Indian-National-Army.jpg',
            bio: "Subhas Chandra Bose was an Indian nationalist leader and statesman who played a key role in the country's struggle for independence against British rule.",
            birthday: { day: 23, month: 1 }
        },
        { 
            name: 'XXXTentacion', 
            image: 'https://www.billboard.com/wp-content/uploads/media/xxxtentacion-press-photo-bw-2018-billboard-1548.jpg?w=606&h=404&crop=1',
            bio: 'XXXTentacion was an American rapper, singer, and songwriter known for his unique style blending elements of hip hop, rock, and emo music. He gained popularity for his raw and emotionally charged music, but tragically passed away at a young age.',
            birthday: { day: 23, month: 1 }
        },
        { 
            name: 'Michael Stevens', 
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Michael_Stevens_VidCon_2016.jpg/220px-Michael_Stevens_VidCon_2016.jpg',
            bio: 'Michael Stevens is an American educator, entertainer, and creator of the popular YouTube channel "Vsauce." He is known for his engaging and thought-provoking videos exploring scientific and philosophical topics, as well as for his enthusiastic and charismatic delivery style.',
            birthday: { day: 23, month: 1 }
        },
        { 
            name: 'Riya Sen', 
            image: 'https://itsagirlthing.live/wp-content/uploads/2021/03/RIYA-SEN.jpg',
            bio: 'Riya Sen is an Indian film actress and model known for her work in Hindi, Bengali, and Tamil cinema. She comes from a prominent Bollywood family and has appeared in numerous films, gaining acclaim for her performances and captivating beauty.',
            birthday: { day: 24, month: 1 }
        },
        { 
            name: 'Michio Kaku', 
            image: 'https://i.guim.co.uk/img/media/9355f12f62523353c33c8ed62d4d28d17ec7376a/1429_1079_1964_1178/master/1964.jpg?width=1200&quality=85&auto=format&fit=max&s=7ec45968bd3df0d04a61616d9766a8f1',
            bio: 'Michio Kaku is an American theoretical physicist, futurist, and popular science communicator. He is known for his work in the fields of string theory and quantum mechanics, as well as for his books and television appearances exploring the possibilities of future technologies and the fate of the universe.',
            birthday: { day: 24, month: 1 }
        },
        { 
            name: 'Navdeep', 
            image: 'https://data1.ibtimes.co.in/en/full/656309/navdeep.jpg?w=646&h=449&l=50&t=40',
            bio: 'Navdeep is an Indian actor and model known for his work predominantly in Telugu cinema. He made his acting debut with the film "Jai" and has since appeared in numerous movies, showcasing his versatility and talent as an actor.',
            birthday: { day: 25, month: 1 }
        },
        { 
            name: 'Volodymyr Zelensky', 
            image: 'https://s7d1.scene7.com/is/image/wbcollab/zelensky-2?qlt=90&fmt=webp&resMode=sharp2',
            bio: "Volodymyr Zelensky is a Ukrainian politician, actor, and comedian who became the President of Ukraine in 2019. He rose to prominence as a comedian and actor, starring in the popular Ukrainian television series \"Servant of the People.\" Zelensky's presidential campaign focused on anti-corruption measures and reforms, and his election marked a significant shift in Ukrainian politics.",
            birthday: { day: 25, month: 1 }
        },
        { 
            name: 'Ravi Shastri', 
            image: 'https://images.hindustantimes.com/img/2022/08/16/550x309/shastri-angry-getty_1660668747602_1660668755206_1660668755206.jpg',
            bio: 'Ravi Shastri is a former Indian cricketer, commentator, and current head coach of the Indian national cricket team. As a player, he was known for his aggressive batting style and off-spin bowling. After retiring from cricket, Shastri pursued a career in commentary and eventually became the head coach of the Indian team, guiding them to success in various international competitions.',
            birthday: { day: 27, month: 5 }
        },
        { 
            name: 'Christopher Lee', 
            image: 'https://cdn.britannica.com/96/234396-050-A4958606/Christopher-Lee-Bangkok-International-Film-Festival-Thailand-February-20-2006.jpg',
            bio: "Christopher Lee was an English actor known for his iconic roles in film and television. He was celebrated for his portrayal of villains, including Count Dracula in numerous Hammer Horror films and Saruman in \"The Lord of the Rings\" trilogy. Lee's distinguished career spanned over six decades, and he remains one of the most revered actors in cinematic history.",
            birthday: { day: 27, month: 5 }
        },
        { 
            name: 'Bobby Deol', 
            image: 'https://www.pinkvilla.com/pics/350x500/1183783637_bobby-deol-p_202311.jpg',
            bio: 'Bobby Deol is an Indian actor known for his work in Hindi cinema. He comes from a prominent Bollywood family and made his acting debut with the film "Barsaat." Deol has appeared in numerous movies, showcasing his talent in a variety of roles, and has garnered acclaim for his performances over the years.',
            birthday: { day: 27, month: 1 }
        },
        { 
            name: 'Shruti Haasan', 
            image: 'https://img.studioflicks.com/wp-content/uploads/2021/09/02092024/1zYJuSccSA45VVBdgozpRcL99Rd.jpg',
            bio: 'Shruti Haasan is an Indian actress and singer who predominantly works in Tamil, Telugu, and Hindi cinema. She is the daughter of veteran actors Kamal Haasan and Sarika Thakur. Shruti made her acting debut in the Tamil film "Luck," and has since appeared in a variety of films, earning praise for her performances and versatility. In addition to acting, she is also a talented musician and has released several successful albums.',
            birthday: { day: 28, month: 1 }
        },
        { 
            name: 'Tom Selleck', 
            image: 'https://soaps.sheknows.com/wp-content/uploads/2023/05/Tom-Selleck-Most-Wanted-1976.jpg?fit=1230%2C720',
            bio: 'Tom Selleck is an American actor and film producer best known for his role as Thomas Magnum in the television series "Magnum, P.I." He has also appeared in numerous films and television shows throughout his career, earning critical acclaim and multiple awards for his performances. Selleck is known for his charismatic screen presence and iconic mustache, and he remains a beloved figure in Hollywood.',
            birthday: { day: 29, month: 1 }
        },
        { 
            name: 'Christian Bale', 
            image: 'https://variety.com/wp-content/uploads/2022/10/GettyImages-1425962190-e1664987389989.jpg',
            bio: 'Christian Bale is a British actor known for his transformative performances and intense dedication to his roles. He has portrayed a wide range of characters in various genres, earning critical acclaim and numerous awards, including an Academy Award for Best Supporting Actor for his role in "The Fighter" and an Academy Award for Best Actor for his portrayal of Dick Cheney in "Vice." Bale is known for his chameleon-like ability to completely immerse himself in his characters, making him one of the most versatile and respected actors in Hollywood.',
            birthday: { day: 30, month: 1 }
        },
        { 
            name: 'Priyadarshan', 
            image: 'https://images.news18.com/ibnlive/uploads/2022/01/priyadarshan.jpg',
            bio: 'Priyadarshan is an Indian film director, screenwriter, and producer known for his work primarily in Malayalam and Hindi cinema. He has directed a wide range of films spanning various genres, including comedy, drama, and romance. Priyadarshan is renowned for his comedic timing, sharp wit, and ability to entertain audiences with his distinct storytelling style. He has received several accolades throughout his career, including numerous awards for his contributions to Indian cinema.',
            birthday: { day: 30, month: 1 }
        },
        { 
            name: 'preity zinta', 
            image: 'https://images.news18.com/ibnlive/uploads/2023/04/preity-zinta-2-16809489923x2.jpg',
            bio: 'Preity Zinta is an Indian actress and entrepreneur known for her work in Hindi films. She made her acting debut in the film "Dil Se.." and quickly rose to fame with her performances in movies like "Dil Chahta Hai," "Kal Ho Naa Ho," and "Veer-Zaara." Zinta is admired for her bubbly personality, dimpled smile, and versatility as an actress. In addition to her successful acting career, she is also a co-owner of the Indian Premier League cricket team Kings XI Punjab and has been involved in various philanthropic endeavors.',
            birthday: { day: 31, month: 1 }
        },
        { 
            name: 'Amy Jackson', 
            image: 'https://i.pinimg.com/736x/f5/08/ff/f508ffc47a00ca95368dc35022963ab8.jpg',
            bio: 'Amy Jackson is a British actress and model who primarily works in Indian cinema, particularly in Tamil, Telugu, and Hindi films. She began her career as a model and won the Miss Teen World competition in 2009. Jackson made her acting debut in the Tamil film "Madrasapattinam" and has since appeared in numerous successful movies, earning praise for her performances and beauty. She is known for her versatility as an actress and has garnered a significant fan following in the Indian film industry.',
            birthday: { day: 31, month: 1 }
        },
        { 
            name: 'Shamita Shetty', 
            image: 'https://www.bollywoodhungama.com/wp-content/uploads/2020/12/EXCLUSIVE-Shamita-Shetty-gives-a-break-down-of-what-she-eats-in-a-day-to-maintain-a-healthy-lifestyle.jpg',
            bio: 'Shamita Shetty is an Indian actress known for her work in Bollywood films. She made her acting debut in the 2000 film "Mohabbatein" and has since appeared in several movies, including "Zeher" and "Fareb." Additionally, she gained popularity through her participation in reality shows like "Bigg Boss" and "Jhalak Dikhhla Jaa."',
            birthday: { day: 2, month: 2 }
        },
        { 
            name: 'Emily Rose', 
            image: 'https://i.pinimg.com/474x/73/31/62/73316276703c3ae1fc82ab598e22156e.jpg',
            bio: 'Emily Rose is an American actress best known for her role as Audrey Parker in the television series "Haven." She has also appeared in various other TV shows and films, including "ER," "Jericho," and "Uncharted 4: A Thief\'s End," where she provided the voice for Elena Fisher.',
            birthday: { day: 2, month: 2 }
        },
        { 
            name: 'Raghuram Rajan', 
            image: 'https://media.newyorker.com/photos/590976bd1c7a8e33fb38f7ee/master/pass/Cassidy-Raghuram-Rajan.jpg',
            bio: 'Raghuram Rajan is an Indian economist and academic who served as the 23rd Governor of the Reserve Bank of India from 2013 to 2016. He is known for his expertise in monetary policy, financial markets, and economic development. Rajan has also been a professor at the University of Chicago Booth School of Business and the author of several influential books on economics and finance.',
            birthday: { day: 3, month: 2 }
        },
        { 
            name: 'Elizabeth Holmes', 
            image: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Elizabeth_Holmes_2014_cropped.jpg',
            bio: 'Elizabeth Holmes is an American entrepreneur who founded Theranos, a now-defunct health technology company. She gained widespread attention for claiming to have revolutionized blood testing with her proprietary technology. However, Holmes and Theranos faced legal troubles and allegations of fraud regarding the accuracy of their tests. She was later charged with multiple counts of fraud and is currently facing legal proceedings.',
            birthday: { day: 3, month: 2 }
        },
        { 
            name: 'Urmila Matondkar', 
            image: 'https://i.pinimg.com/originals/3e/90/41/3e9041a168c4e5af9ccbfc87ed1b762b.jpg',
            bio: 'Urmila Matondkar is an Indian actress known for her work predominantly in Hindi cinema. She gained fame for her roles in films like "Rangeela," "Satya," and "Bhoot." Matondkar has showcased versatility across various genres and is celebrated for her powerful performances and captivating screen presence.',
            birthday: { day: 4, month: 2 }
        },
        { 
            name: 'Varun Sharma', 
            image: 'https://static.toiimg.com/thumb/msid-100984875,width-1280,height-720,resizemode-4/100984875.jpg',
            bio: 'Varun Sharma is an Indian actor known for his comedic roles in Bollywood films. He rose to prominence with his portrayal of Choocha in the "Fukrey" film series, winning acclaim for his comic timing and quirky character. Sharma has since appeared in several successful movies, earning praise for his ability to bring humor and charm to his roles.',
            birthday: { day: 4, month: 2 }
        },
        { 
            name: 'Bhuvneshwar Kumar', 
            image: 'https://www.royalchallengers.com/PRRCB01/public/styles/1061x767_landscape/public/2021-01/GettyImages-1076453642.jpg?itok=AbljGMVX',
            bio: 'Bhuvneshwar Kumar is an Indian cricketer known for his prowess as a fast-medium swing bowler. He has represented the Indian national cricket team in all three formats of the game and has been particularly effective in limited-overs cricket. Kumar is celebrated for his ability to swing the ball both ways and his knack for picking up crucial wickets, making him a valuable asset to the team.',
            birthday: { day: 5, month: 2 }
        },
        { 
            name: 'Cristiano Ronaldo', 
            image: 'https://i2-prod.dailystar.co.uk/incoming/article24241395.ece/ALTERNATES/s458/2_GettyImages-88018161.jpg',
            bio: 'Cristiano Ronaldo, often regarded as one of the greatest footballers of all time, is a Portuguese professional footballer. Known for his incredible athleticism, skill, and goal-scoring ability, Ronaldo has achieved immense success throughout his career. He has played for top clubs such as Manchester United, Real Madrid, and Juventus, winning numerous domestic league titles, Champions League trophies, and individual awards, including multiple FIFA Ballon d\'Or awards. Ronaldo\'s dedication to training, remarkable goal-scoring record, and charismatic personality have made him a global icon in the world of football.',
            birthday: { day: 5, month: 2 }
        },

        { 
            name: 'Neymar', 
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Neymar_850_1705.jpg/1200px-20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Neymar_850_1705.jpg',
            bio: 'Neymar, a Brazilian footballer, is renowned for his exceptional dribbling skills, creativity, and flair on the field. He began his professional career at Santos in Brazil before moving to Barcelona in 2013 and then to Paris Saint-Germain in 2017, becoming one of the most expensive players in history. Neymar is known for his ability to change the course of a game with his dazzling runs, precise passes, and goal-scoring prowess. He has won numerous domestic titles, including league championships and cup competitions, and has represented Brazil in multiple FIFA World Cups, showcasing his talent on the international stage.',
            birthday: { day: 5, month: 2 }
        },
        { 
            name: 'Nora Fatehi', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWFR7VO4EWArcctd_S_N2QsJBMwCeyPsuvLdrfaCaUUFuyfRxn971rxnywxcnyxtwjGGQ&usqp=CAU',
            bio: 'Nora Fatehi is a Canadian dancer, model, and actress who primarily works in the Indian film industry. She gained popularity for her impressive dance skills and captivating performances in various Bollywood songs, including "Dilbar" and "Kamariya." Fatehi has also appeared in films such as "Stree" and "Bharat," where she showcased her versatility as an actress. With her talent, charisma, and glamorous persona, she has become a prominent figure in the entertainment industry.',
            birthday: { day: 6, month: 2 }
        },
        { 
            name: 'Srikanth Kidambi', 
            image: 'https://img.olympics.com/images/image/private/t_1-1_300/f_auto/primary/yizjyob02tjuusnbdr32',
            bio: 'Srikanth Kidambi is an Indian badminton player who has achieved significant success in the sport. He has been consistently ranked among the top players in the world and has won multiple titles on the international circuit. Srikanth made history by becoming the first Indian male badminton player to win four Super Series titles in a single year in 2017. Known for his attacking style of play and powerful smashes, he has been a formidable force in men\'s singles badminton, representing India with distinction in various prestigious tournaments around the globe.',
            birthday: { day: 7, month: 2 }
        },
        { 
            name: 'Chris Rock', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrlx8p_jTuJ4Sen1qcou-topq1MOf1HaBEtUM3YuZUjg&s',
            bio: 'Chris Rock is an American comedian, actor, and filmmaker known for his sharp wit, observational humor, and social commentary. He gained prominence as a cast member on "Saturday Night Live" in the early 1990s before transitioning to a successful stand-up comedy career. Rock\'s comedy often addresses race, politics, and relationships, earning him critical acclaim and numerous awards, including multiple Grammy Awards. In addition to his stand-up specials, he has starred in various films and television shows, showcasing his versatility as a performer and entertainer.',
            birthday: { day: 7, month: 2 }
        },
        { 
            name: 'Lana Turner', 
            image: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Lana_Turner_still.JPG',
            bio: 'Lana Turner was an American actress who rose to fame during the Golden Age of Hollywood. She starred in numerous films throughout the 1940s and 1950s, becoming known for her beauty, glamour, and versatility as an actress. Turner\'s most notable roles include "The Postman Always Rings Twice," "Peyton Place," and "Imitation of Life." She was also known for her personal life, which often attracted media attention. Turner remains an iconic figure in Hollywood history, remembered for her talent and enduring legacy on the silver screen.',
            birthday: { day: 8, month: 2 }
        },
        { 
            name: 'Michael B. Jordan', 
            image: 'https://hips.hearstapps.com/hmg-prod/images/actor-michael-b-jordan-attends-the-2022-vanity-fair-oscar-news-photo-1671136187.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*',
            bio: 'Michael B. Jordan is an American actor known for his powerful performances in both film and television. He gained widespread recognition for his portrayal of Oscar Grant in the film "Fruitvale Station" and his role as Adonis Creed in the "Rocky" spin-off series, "Creed." Jordan has also starred in blockbuster films such as "Black Panther," "Creed II," and "Just Mercy," showcasing his range as an actor and earning critical acclaim for his work. Additionally, he has been praised for his activism and efforts to promote diversity and representation in the entertainment industry.',
            birthday: { day: 9, month: 2 }
        },
        { 
            name: 'Tom Hiddleston', 
            image: 'https://hips.hearstapps.com/elle/assets/16/24/1466110986-gettyimages-484683817-1.jpg',
            bio: 'Tom Hiddleston is an English actor best known for his role as Loki in the Marvel Cinematic Universe. He gained international fame for his portrayal of the mischievous and charismatic Norse god of mischief, appearing in multiple Marvel films such as "Thor," "The Avengers," and "Thor: Ragnarok." Hiddleston\'s performance as Loki has earned him widespread praise from audiences and critics alike. Beyond his work in the MCU, he has also showcased his talent in various other film, television, and stage productions, establishing himself as one of the most versatile actors of his generation.',
            birthday: { day: 9, month: 2 }
        },
        { 
            name: 'Emma Roberts', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU2ZMiqyO_A5CZEqupHTVsSwAxqQUCo6bIf3A7zg5hSA&s',
            bio: 'Emma Roberts is an American actress known for her roles in film and television. She gained prominence for her performance as Addie Singer in the Nickelodeon series "Unfabulous." Roberts has since appeared in various films, including "Nancy Drew," "We\'re the Millers," and "The Art of Getting By." She is also known for her roles in the anthology horror television series "American Horror Story." Roberts\' talent, versatility, and on-screen charisma have solidified her as a prominent figure in Hollywood.',
            birthday: { day: 10, month: 2 }
        },
        { 
            name: 'Jennifer Aniston', 
            image: 'https://hips.hearstapps.com/hmg-prod/images/jennifer-aniston-is-seen-filming-on-location-for-the-news-photo-1692867076.jpg?crop=1xw:0.88847xh;center,top&resize=1200:*',
            bio: 'Jennifer Aniston is an American actress, producer, and businesswoman, best known for her role as Rachel Green on the television sitcom "Friends." Her portrayal of Rachel garnered her widespread acclaim and several awards, including a Primetime Emmy Award and a Golden Globe Award. Aniston has since appeared in numerous successful films, such as "Marley & Me," "The Break-Up," and "Horrible Bosses." She continues to be a prominent figure in Hollywood, admired for her talent, beauty, and contributions to both film and television.',
            birthday: { day: 11, month: 2 }
        },
        { 
            name: 'Thomas Edison', 
            image: 'https://images.saymedia-content.com/.image/t_share/MjAyNDU1NTI5NTIyNDcyMDA0/the-inventor-thomas-alva-edison.jpg',
            bio: 'Thomas Edison was an American inventor and businessman who played a pivotal role in shaping the modern world through his numerous inventions and innovations. He is best known for inventing the practical electric light bulb and the phonograph, which revolutionized the way people live and communicate. Edison also developed the motion picture camera and contributed to advancements in telegraphy, mining, and sound recording. His ingenuity and entrepreneurial spirit earned him the nickname "The Wizard of Menlo Park" and solidified his legacy as one of the most influential inventors in history.',
            birthday: { day: 11, month: 2 }
        },
        { 
            name: 'Charles Darwin', 
            image: 'https://www.thoughtco.com/thmb/GZD-Ax2jcBNV9bjQWIqU0toFTSk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/CharlesDarwin-5c2c3d7e46e0fb0001a343e3.jpg',
            bio: 'Charles Darwin was an English naturalist, geologist, and biologist who is best known for his theory of evolution by natural selection. His groundbreaking work, "On the Origin of Species," published in 1859, proposed that all species of life have descended over time from common ancestors through a process of gradual change driven by natural selection. Darwin\'s theory revolutionized the scientific understanding of the diversity of life on Earth and provided a unifying explanation for the vast array of biological observations. His contributions to evolutionary biology remain foundational to modern biology and have had a profound impact on fields ranging from genetics to anthropology.',
            birthday: { day: 12, month: 2 }
        },
        { 
            name: 'Sarojini Naidu', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAKbQq-QNuC1FN9Nqjp5fd2fs7h8w3zz2scCFN9bd58g&s',
            bio: 'Sarojini Naidu, also known as "The Nightingale of India," was a prominent Indian independence activist, poet, and politician. She played a significant role in the Indian Nationalist movement, advocating for India\'s independence from British rule. Naidu was the first woman to become the President of the Indian National Congress and the first woman to serve as a state governor in independent India. Apart from her political contributions, she was also celebrated as a gifted poet in both English and her native language, Telugu. Naidu\'s eloquent speeches and poignant poetry inspired generations of Indians in their struggle for freedom and social reform.',
            birthday: { day: 13, month: 2 }
        },
        { 
            name: 'Deeksha Seth', 
            image: 'https://i0.wp.com/globalzonetoday.com/wp-content/uploads/2022/07/Deeksha-Seth.jpg?ssl=1',
            bio: 'Deeksha Seth is an Indian actress known for her work in Telugu and Hindi films. She made her acting debut in the Telugu film "Vedam" and has since appeared in movies like "Rebel" and "Lekar Hum Deewana Dil." With her charm and acting skills, she has carved a niche for herself in the Indian film industry.',
            birthday: { day: 14, month: 2 }
        },
        { 
            name: 'Madhubala', 
            image: 'https://i.pinimg.com/1200x/40/f2/be/40f2beb6b3ae1aeff7c89994d9ef2300.jpg',
            bio: 'Madhubala was an iconic Indian actress known for her beauty, grace, and talent. She starred in numerous Hindi films during the Golden Age of Indian cinema, earning the title of "The Venus of Indian Cinema." Madhubala\'s most famous role was in the classic film "Mughal-e-Azam," where she portrayed Anarkali. Her magnetic presence on-screen and versatility as an actress made her a beloved figure in Indian cinema, and she continues to be remembered as one of the greatest actresses of all time.',
            birthday: { day: 14, month: 2 }
        },
        { 
            name: 'Meera Jasmine', 
            image: 'https://photos.telugurajyam.com/wp-content/uploads/2023/02/Meera-Jasmine_9.jpg',
            bio: 'Meera Jasmine is a renowned Indian actress who predominantly appears in Malayalam, Tamil, and Telugu films. She made her acting debut in the Malayalam film "Soothradharan" and quickly rose to fame with her exceptional performances in movies like "Paadam Onnu: Oru Vilapam" and "Kasthuriman." Jasmine has won several awards for her acting prowess and versatility, establishing herself as one of the most talented actresses in the South Indian film industry.',
            birthday: { day: 15, month: 2 }
        },
        { 
            name: 'Galileo Galilei', 
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Galileo.arp.300pix.jpg/800px-Galileo.arp.300pix.jpg',
            bio: 'Galileo Galilei was an Italian polymath, astronomer, physicist, and engineer who played a pivotal role in the scientific revolution of the 17th century. He is best known for his improvements to the telescope and his astronomical observations, which provided compelling evidence for the heliocentric model of the solar system proposed by Copernicus. Galileo\'s support for heliocentrism brought him into conflict with the Catholic Church, resulting in his trial and condemnation by the Inquisition. Despite facing persecution, his contributions to physics, mathematics, and astronomy laid the groundwork for modern science and forever changed our understanding of the universe.',
            birthday: { day: 15, month: 2 }
        },
        { 
            name: 'Elizabeth Olsen', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl9yz_HbzOsrxUaUlU5QR92dRlRpKo2C2JxWuVXcz5MXdJr0k0DuiT5IaStvYj4eul-0g&usqp=CAU',
            bio: 'Elizabeth Olsen is an American actress known for her roles in both independent and blockbuster films. She gained widespread recognition for her portrayal of Wanda Maximoff / Scarlet Witch in the Marvel Cinematic Universe, appearing in films like "Avengers: Age of Ultron" and the Disney+ series "WandaVision." Olsen has also earned critical acclaim for her performances in indie films such as "Martha Marcy May Marlene" and "Wind River," showcasing her versatility as an actress.',
            birthday: { day: 16, month: 2 }
        },
        { 
            name: 'The Weeknd', 
            image: 'https://www.billboard.com/wp-content/uploads/2023/06/the-weeknd-may-2023-billboard-1548.jpg?w=942&h=623&crop=1',
            bio: 'The Weeknd, born Abel Makkonen Tesfaye, is a Canadian singer, songwriter, and record producer. He gained popularity with his mixtapes released in 2011, leading to his mainstream breakthrough with the album "Beauty Behind the Madness" in 2015. Known for his distinctive voice and eclectic style, The Weeknd has produced numerous hit songs like "Blinding Lights," "Can\'t Feel My Face," and "Starboy." He has won several awards, including Grammy Awards, and continues to be a prominent figure in the music industry.',
            birthday: { day: 16, month: 2 }
        },
        { 
            name: 'Sivakarthikeyan', 
            image: 'https://i.pinimg.com/736x/bd/0f/c4/bd0fc4baf402158bc66f0d62d566f1b4.jpg',
            bio: 'Sivakarthikeyan is a popular Indian actor, comedian, and playback singer who primarily works in Tamil cinema. He initially gained fame through his appearances on television shows and as a stand-up comedian. Sivakarthikeyan made his acting debut in the film "Marina" and rose to prominence with successful movies like "Varuthapadatha Valibar Sangam" and "Remo." Known for his natural acting style and comedic timing, he has become one of the leading actors in Tamil cinema, with a dedicated fan base.',
            birthday: { day: 17, month: 2 }
        },
        { 
            name: 'K. Chandrashekar Rao', 
            image: 'https://imagesvs.oneindia.com/fit-in/600x338/img/2023/08/k-chandrasekhar-rao-1690959464.jpg',
            bio: 'K. Chandrashekar Rao, often referred to as KCR, is an Indian politician and the Chief Minister of the Indian state of Telangana. He is the founder and president of the Telangana Rashtra Samithi (TRS) party, which played a crucial role in the formation of the separate state of Telangana. KCR is known for his strong leadership and populist policies, focusing on welfare schemes and development initiatives for the people of Telangana. He has been instrumental in shaping the political landscape of the region and continues to be a prominent figure in Indian politics.',
            birthday: { day: 17, month: 2 }
        },
        { 
            name: 'Michael Jordan', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvWW6_L5A6i-j4zJ-TPk0JsBMbVTzy_rhZjJleZfnKw&s',
            bio: 'Michael Jordan is a retired basketball legend, widely considered one of the greatest players of all time. He won six NBA championships with the Chicago Bulls and earned numerous accolades, including five MVP awards.',
            birthday: { day: 17, month: 2 }
        },
        { 
            name: 'Ed Sheeran', 
            image: 'https://people.com/thmb/KrQ4lfYxqMlWxyVD0Tu8Y5OjlOs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(764x284:766x286)/ed-sheeran-grammys-los-angeles-020424_2804-e092e3e56eee4cda8fab2a86d6562d93.jpg',
            bio: 'Ed Sheeran is a British singer-songwriter known for his soulful voice and heartfelt lyrics. He rose to fame with hits like "Shape of You," "Thinking Out Loud," and "Perfect." Sheeran\'s blend of pop, folk, and R&B has earned him widespread acclaim and numerous awards, making him one of the best-selling music artists in the world.',
            birthday: { day: 17, month: 2 }
        },
        { 
            name: 'Ramakrishna', 
            image: 'https://www.nodualidad.info/imagen/maestros-vedanta/ramakrishna.jpg',
            bio: 'Ramakrishna Paramahamsa, often referred to simply as Ramakrishna, was a 19th-century Indian mystic and spiritual leader. He is best known for his teachings on religious harmony and the concept of God realization through various spiritual paths, including devotion, meditation, and selfless service. Ramakrishna\'s teachings inspired the formation of the Ramakrishna Order by his chief disciple Swami Vivekananda, which has since become a prominent spiritual organization dedicated to social service and spiritual upliftment. Ramakrishna\'s life and teachings continue to influence spiritual seekers around the world.',
            birthday: { day: 18, month: 2 }
        },
        { 
            name: 'Tina Fey', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2XyVLxzHbRl5uc-t7ES4l35rdIQ7V814XmYQwOVgwzQ&s',
            bio: 'Tina Fey is an American actress, comedian, writer, producer, and playwright. She gained prominence as a writer and performer on "Saturday Night Live," where she became the show\'s first female head writer. Fey is best known for creating and starring in the critically acclaimed television series "30 Rock," for which she received numerous awards, including several Emmy Awards. She has also starred in films like "Mean Girls" and "Date Night." Fey is celebrated for her sharp wit, comedic talent, and contributions to comedy both on-screen and behind the scenes.',
            birthday: { day: 18, month: 2 }
        },
        { 
            name: 'J-Hope', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQqfTKV2MDIYNNNk6R7FNihsujzcECtiGwBS9M3f4G2w&s',
            bio: 'J-Hope, whose real name is Jung Hoseok, is a South Korean rapper, dancer, songwriter, and record producer. He is a member of the internationally renowned boy band BTS, also known as the Bangtan Boys. J-Hope is known for his exceptional dancing skills, vibrant stage presence, and versatile rapping style. He has contributed to BTS\'s success with hit songs like "MIC Drop," "IDOL," and "Dynamite." Beyond his musical talents, J-Hope is also recognized for his positive energy, philanthropic efforts, and impact on global pop culture.',
            birthday: { day: 18, month: 2 }
        },
        { 
            name: 'Shivaji', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDUTgOtPbUNo6_1bt4qnWzOBcJYxlCbSE5sK0UUBpOw&s',
            bio: ' Chhatrapati Shivaji Maharaj, was a 17th-century Indian warrior king and the founder of the Maratha Empire in western India. He is revered for his military prowess, administrative skills, and commitment to Hindavi Swarajya, or self-rule for the Indian people. Shivaji Maharaj\'s strategic military campaigns against the Mughal Empire and other adversaries established him as a legendary figure in Indian history. His legacy includes promoting religious tolerance, implementing innovative military tactics, and fostering a sense of pride and unity among the Maratha people. He continues to be celebrated as a symbol of courage, leadership, and resistance against oppression in India.',
            birthday: { day: 19, month: 2 }
        },
        { 
            name: 'Millie Bobby Brown', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7QXCyh_AfOVQ6kSU9o9QoQzwznVtWvnA1M1bpU2aRAAA1hkyPyattryf684iLymrsOi4&usqp=CAU',
            bio: 'Millie Bobby Brown is a British actress and model who gained international fame for her role as Eleven in the Netflix science fiction horror series "Stranger Things." She began her acting career at a young age and quickly rose to prominence with her captivating performance as the mysterious and powerful Eleven. Brown\'s portrayal of Eleven earned her critical acclaim and several awards, making her one of the most recognizable young actresses in Hollywood. In addition to her acting career, she has also ventured into modeling and has become a prominent figure in the fashion industry.',
            birthday: { day: 19, month: 2 }
        },
        { 
            name: 'Anupama Parameswaran', 
            image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/m/6/r/small-anupama-parameswaran-308-anupama-parameswaran-poster-original-imaghxg6ukfhnvxf.jpeg?q=90&crop=false',
            bio: 'Anupama Parameswaran is an Indian actress who primarily works in the South Indian film industry, particularly in Telugu, Malayalam, and Tamil cinema. She made her acting debut with the Malayalam film "Premam" and gained recognition for her performance in the film. Anupama has since appeared in several successful movies in various languages, showcasing her acting talent and versatility. With her charm and on-screen presence, she has garnered a significant fan following in the South Indian film industry.',
            birthday: { day: 20, month: 2 }
        },
        { 
            name: 'Rihanna', 
            image: 'https://static.tnn.in/thumb/msid-109456198,thumbsize-45604,width-1280,height-720,resizemode-75/109456198.jpg',
            bio: 'Rihanna is a Barbadian singer, songwriter, actress, and businesswoman. She rose to prominence with her debut album, "Music of the Sun," and has since become one of the best-selling music artists of all time. Known for her distinctive voice, catchy songs, and bold fashion choices, Rihanna has released numerous hit singles such as "Umbrella," "Diamonds," and "Work." In addition to her music career, she has ventured into acting, fashion design, and entrepreneurship, launching successful businesses like Fenty Beauty and Savage X Fenty.',
            birthday: { day: 20, month: 2 }
        },
        { 
            name: 'Vedhika', 
            image: 'https://www.bollywoodhungama.com/wp-content/uploads/2019/12/vedhika.jpg',
            bio: 'Vedhika is an Indian actress who primarily works in the South Indian film industry, particularly in Tamil, Telugu, and Kannada cinema. She made her acting debut in the Tamil film "Madrasi" and has since appeared in several successful movies, showcasing her acting talent and versatility. Vedhika is known for her captivating performances and has garnered a significant fan following in the South Indian film industry.',
            birthday: { day: 21, month: 2 }
        },
        { 
            name: 'Sophie Turner', 
            image: 'https://ew.com/thmb/toR-3uNlsef4MQIj7mCneCqpbaU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gettyimages-1153778157-2000-f56cb5486b374a729367d158cfa715f9.jpg',
            bio: 'Sophie Turner is an English actress best known for her role as Sansa Stark in the acclaimed television series "Game of Thrones." She gained widespread recognition and critical acclaim for her portrayal of the resilient and strategic character. Turner has also appeared in films like "X-Men: Apocalypse" and "Dark Phoenix," showcasing her versatility as an actress. Off-screen, she is known for her advocacy work on mental health issues and her charismatic personality, making her a beloved figure in the entertainment industry.',
            birthday: { day: 21, month: 2 }
        },
        { 
            name: 'George Washington', 
            image: 'https://cdn.britannica.com/43/173043-050-957816CE/oil-George-Washington-canvas-Gilbert-Stuart-Washington.jpg?w=400&h=300&c=crop',
            bio: 'George Washington was the first President of the United States, serving from 1789 to 1797. He played a pivotal role in leading the American Revolutionary War to victory, earning him the title "Father of His Country." Washington\'s leadership, integrity, and dedication to the principles of liberty and democracy laid the foundation for the young nation.',
            birthday: { day: 22, month: 2 }
        },
        { 
            name: 'Emily Blunt', 
            image: 'https://www.deseret.com/resizer/v2/CJ2XECEPKQ5DW64TLGYKZANUJM.jpg?auth=9cf862926ea105704a5783d5d5e9424fa4252a7c690df8a691d43f183a9b3429&focal=2250%2C1211&width=800&height=533',
            bio: 'Emily Blunt is a British actress known for her versatile roles in film and television. She gained recognition for her breakout performance in "The Devil Wears Prada" and has since starred in a variety of genres, including dramas like "The Young Victoria," sci-fi thrillers like "Edge of Tomorrow," and musicals like "Into the Woods." Blunt\'s talent, range, and on-screen charisma have earned her critical acclaim and numerous awards, establishing her as one of the leading actresses of her generation.',
            birthday: { day: 23, month: 2 }
        },
        { 
            name: 'Daymond John', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrIxrIZHzEKV-eWAf-ALw9DyOExs4H7MhNDXOdzHlpjKvwm5L6eMO9rfZOjv6ls2hJ65Q&usqp=CAU',
            bio: 'Daymond John is an American businessman, investor, and television personality best known as the founder and CEO of the clothing brand FUBU. He gained widespread fame as one of the "sharks" on the reality television show "Shark Tank," where entrepreneurs pitch their business ideas to a panel of investors. John\'s entrepreneurial expertise, business acumen, and insightful advice have made him a respected figure in the business world. He is also a motivational speaker.',
            birthday: { day: 23, month: 2 }
        },
        { 
            name: 'Steve Jobs', 
            image: 'https://cdn.vox-cdn.com/thumbor/yIoKynT0Jl-zE7yWwzmW2fy04xc=/0x0:706x644/1400x1400/filters:focal(353x322:354x323)/cdn.vox-cdn.com/uploads/chorus_asset/file/13874040/stevejobs.1419962539.png',
            bio: 'Steve Jobs was an American entrepreneur, business magnate, and inventor who co-founded Apple Inc. He is widely regarded as a pioneer of the personal computer revolution and played a key role in the development of iconic products such as the iPhone, iPad, and Macintosh computer. Jobs\' visionary leadership, innovative designs, and relentless pursuit of excellence transformed multiple industries and revolutionized the way people communicate, work, and interact with technology. Despite facing setbacks and challenges, his creativity, passion, and commitment to excellence continue to inspire entrepreneurs and innovators worldwide.',
            birthday: { day: 24, month: 2 }
        },
        { 
            name: 'Dhanush', 
            image: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2022-07/220715-dhanush-mn-1125-5952c6.jpg',
            bio: 'Dhanush is an Indian actor, producer, and playback singer known for his work in Tamil cinema. He gained fame with his role in "Aadukalam," winning the National Film Award for Best Actor. Versatile and acclaimed, he\'s also a talented singer, contributing to hit songs. Dhanush remains a prominent figure in the South Indian film industry.',
            birthday: { day: 25, month: 2 }
        },
        { 
            name: 'Urvashi Rautela', 
            image: 'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/10/urvashi-rautela-1-1697628762.jpg',
            bio: 'Urvashi Rautela is an Indian actress and model known for her work in Bollywood films. She won the Miss Diva Universe 2015 pageant and has since appeared in movies like "Sanam Re" and "Hate Story 4." Rautela\'s beauty, charm, and talent have made her a rising star in the Indian entertainment industry.',
            birthday: { day: 25, month: 2 }
        },
        { 
            name: 'Shaktikanta Das', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtm6FQ4XiQSnxhtObJIZZk7oiRMksZ5SGCaSdVvzroNg&s',
            bio: 'Shaktikanta Das is an Indian economist and bureaucrat serving as the 25th Governor of the Reserve Bank of India (RBI). He has held various positions in the Indian Administrative Service (IAS) and played a crucial role in economic policy formulation and implementation. As RBI Governor, Das oversees monetary policy and regulatory functions, contributing to India\'s financial stability and growth.',
            birthday: { day: 26, month: 2 }
        },
        { 
            name: 'Elizabeth Taylor', 
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Taylor%2C_Elizabeth_posed.jpg/640px-Taylor%2C_Elizabeth_posed.jpg',
            bio: 'Elizabeth Taylor was a British-American actress, businesswoman, and humanitarian. Renowned for her beauty, talent, and glamorous lifestyle, she starred in iconic films like "Cleopatra," "Cat on a Hot Tin Roof," and "Who\'s Afraid of Virginia Woolf?" Taylor won two Academy Awards for Best Actress and received numerous accolades throughout her career. Off-screen, she was a passionate advocate for AIDS awareness and research.',
            birthday: { day: 27, month: 2 }
        },
        { 
            name: 'Sunil', 
            image: 'https://www.telugu360.com/wp-content/uploads/2018/09/Sunil.jpg',
            bio: 'Sunil is an Indian actor and comedian known for his work in Telugu cinema. He gained popularity for his comedic roles in films like "Maryada Ramanna" and "Poola Rangadu." Sunil\'s comic timing and lively performances have made him a beloved figure in the Telugu film industry.',
            birthday: { day: 28, month: 2 }
        },
        { 
            name: '{Your Name}', 
            image: 'https://i.pinimg.com/736x/4b/34/52/4b3452a8eac084cedc19084cc45af825.jpg',
            bio: '{Your Bio} You are a celebrity too',
            birthday: { day: 29, month: 2 }
        },
        //Month February
        { 
            name: 'Justin Bieber', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzFoUjd59cZk_LPnTOkB-W3W24IyZHGD12oHA74bVPqA&s',
            bio: 'Justin Bieber is a Canadian singer, songwriter, and pop sensation. He rose to fame as a teenager with hits like "Baby" and "Sorry." Bieber\'s music spans multiple genres, and he\'s known for his catchy tunes and vocal abilities. Beyond music, he\'s also made headlines for his personal life and philanthropy, cementing his status as a global superstar.',
            birthday: { day: 1, month: 3 }
        },
        { 
            name: 'Daniel Craig', 
            image: 'https://pbs.twimg.com/profile_images/895309374121426945/WTrW0-oc_400x400.jpg',
            bio: 'Daniel Craig is an English actor best known for his portrayal of James Bond in the iconic film series. He brought a rugged and gritty edge to the character, starring in films like "Casino Royale," "Skyfall," and "No Time to Die." Craig\'s portrayal of Bond earned him critical acclaim and solidified his status as one of the most recognizable actors in the world.',
            birthday: { day: 2, month: 3 }
        },
        { 
            name: 'Shraddha Kapoor', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7AE5_-JUh3MIBkvAJq3R7HB-fMJhC29DXpjT3e2HNmw&s',
            bio: 'Shraddha Kapoor is an Indian actress and singer known for her work in Bollywood films. She gained fame with roles in movies like "Aashiqui 2" and "Ek Villain." Kapoor\'s versatility and on-screen charisma have earned her acclaim and a significant fan following in the Indian film industry. Additionally, she has showcased her singing talent in several film soundtracks, further establishing herself as a multifaceted performer.',
            birthday: { day: 3, month: 3 }
        },
        { 
            name: 'Shraddha Das', 
            image: 'https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/98/7b/31/987b3111-717c-cf89-cb9d-f77b2664dfaf/source/512x512bb.jpg',
            bio: 'Shraddha Das is an Indian actress who primarily appears in Telugu, Hindi, Kannada, and Bengali films. She made her acting debut in the Telugu film "Siddu from Sikakulam" and has since appeared in various movies, showcasing her acting prowess and versatility. With her captivating performances, Das has carved a niche for herself in the Indian film industry.',
            birthday: { day: 4, month: 3 }
        },
        { 
            name: 'Nassar ', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgq6uU2epamF43yQHcSj0f6sxLsLPRPmnOisuPF7agKg&s',
            bio: 'Nassar is an Indian actor and filmmaker who predominantly works in the South Indian film industry, particularly in Tamil cinema. He has appeared in numerous films, portraying a wide range of characters, and is known for his versatile acting skills. Nassar\'s performances have earned him critical acclaim and recognition, making him one of the most respected actors in the industry. Additionally, he has ventured into filmmaking and has directed a few notable films.',
            birthday: { day: 5, month: 3 }
        },
        { 
            name: 'Shaquille O\'Neal', 
            image: 'https://www.hollywoodreporter.com/wp-content/uploads/2023/12/Shaquille-ONeal-TikTok-Mix-Arrivals-GettyImages-1845940702-H-2023.jpg?w=1296',
            bio: 'Shaquille O\'Neal, commonly known as Shaq, is a retired American professional basketball player and sports analyst. He is considered one of the greatest basketball players of all time, known for his dominant presence on the court and his larger-than-life personality off it. Shaq won four NBA championships during his illustrious career, playing for teams like the Los Angeles Lakers and the Miami Heat. Since retiring, he has become a successful entrepreneur, actor, and television personality.',
            birthday: { day: 6, month: 3 }
        },
        { 
            name: 'Anupam Kher', 
            image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202105/179226671_597482151209915_3460_1200x768.jpeg?size=690:388',
            bio: 'Anupam Kher is an acclaimed Indian actor known for his versatile performances in Bollywood and international cinema. He has appeared in over 500 films across various languages and genres, earning numerous awards and accolades throughout his career. Kher\'s notable roles include "Saaransh," "Dilwale Dulhania Le Jayenge," and "Silver Linings Playbook." Additionally, he is a respected public figure, author, and social activist.',
            birthday: { day: 7, month: 3 }
        },
        { 
            name: 'Upendra Limaye', 
            image: 'https://starsunfolded.com/wp-content/uploads/2023/12/Upendra-Limaye.jpg',
            bio: 'Upendra Limaye is an Indian actor known for his work primarily in Marathi cinema. He gained recognition for his role in the film "Jogwa," for which he won the National Film Award for Best Actor. Limaye has since appeared in various Marathi films, showcasing his talent and versatility as an actor. He continues to be a prominent figure in the Marathi film industry, known for his impactful performances.',
            birthday: { day: 8, month: 3 }
        },
        { 
            name: 'Oscar Isaac', 
            image: 'https://variety.com/wp-content/uploads/2019/01/oscar-isaac.jpg',
            bio: 'Oscar Isaac is a Guatemalan-American actor known for his versatile performances in film and television. He gained widespread acclaim for his roles in movies like "Inside Llewyn Davis," "Ex Machina," and the "Star Wars" sequel trilogy, where he portrayed Poe Dameron. Isaac\'s talent, charisma, and range as an actor have earned him critical acclaim and a dedicated fan following.',
            birthday: { day: 9, month: 3 }
        },
        { 
            name: 'Ritu Varma', 
            image: 'https://pbs.twimg.com/media/F_dkX1kbQAAqpL8?format=jpg&name=large',
            bio: 'Ritu Varma is an Indian actress who primarily works in the Telugu and Tamil film industries. She gained recognition for her performance in the Telugu romantic drama film "Pelli Choopulu," which won her the Filmfare Award for Best Actress. Varma has since appeared in several successful movies, showcasing her acting talent and versatility. She continues to be a prominent figure in the South Indian film industry.',
            birthday: { day: 10, month: 3 }
        },
        { 
            name: 'Parth Samthaan', 
            image: 'https://pbs.twimg.com/profile_images/1774766164180156416/YwMoje1F_400x400.jpg',
            bio: 'Parth Samthaan is an Indian actor and model known for his work in Hindi television serials. He gained popularity for his portrayal of Manik Malhotra in the youth-oriented series "Kaisi Yeh Yaariaan." Samthaan has since appeared in various television shows, earning a dedicated fan base for his on-screen performances and charming personality. He continues to be a prominent figure in the Indian television industry.',
            birthday: { day: 11, month: 3 }
        },
        { 
            name: 'Shreya Ghoshal', 
            image: 'https://i.scdn.co/image/ab6761610000517436a7262247318ff0f1ad00da',
            bio: 'Shreya Ghoshal is an Indian playback singer known for her melodious voice and versatile singing style. She gained recognition after winning the singing reality show "Sa Re Ga Ma Pa" and has since become one of the leading playback singers in Bollywood. Ghoshal has lent her voice to numerous hit songs in Hindi and regional languages, earning her several awards and accolades for her contributions to Indian music.',
            birthday: { day: 12, month: 3 }
        },
        { 
            name: 'Geeta Basra', 
            image: 'https://static.tnn.in/thumb/msid-104535746,thumbsize-70766,width-1280,height-720,resizemode-75/104535746.jpg',
            bio: 'Geeta Basra is an Indian actress known for her work in Hindi films. She gained prominence for her roles in movies like "Dil Diya Hai" and "The Train." Basra has showcased her acting talent and charm on screen, earning a dedicated fan following in the Indian film industry. Additionally, she is known for her personal life, being married to Indian cricketer Harbhajan Singh.',
            birthday: { day: 13, month: 3 }
        },
        { 
            name: 'Albert Einstein', 
            image: 'https://images.newscientist.com/wp-content/uploads/2019/06/18142824/einstein.jpg',
            bio: 'Albert Einstein was a German-born theoretical physicist who revolutionized our understanding of the universe. His theory of relativity, expressed through the famous equation E=mc², transformed physics and laid the foundation for modern cosmology. Einstein\'s insights into the nature of space, time, and gravity reshaped scientific thinking and led to numerous groundbreaking discoveries. He was awarded the Nobel Prize in Physics in 1921 for his explanation of the photoelectric effect.',
            birthday: { day: 14, month: 3 }
        },
        { 
            name: 'Aamir Khan', 
            image: 'https://images.news18.com/ibnlive/uploads/2018/03/Aamir-Khan2.jpg',
            bio: 'Aamir Khan is an Indian actor, filmmaker, and philanthropist known for his groundbreaking work in Hindi cinema. He has earned acclaim for his versatile performances in films like "Lagaan," "Dangal," and "Taare Zameen Par," which he also directed. Khan is known for his commitment to socially relevant storytelling and has been honored with numerous awards for his contributions to Indian cinema. Additionally, he is actively involved in social causes and initiatives aimed at creating positive change in society.',
            birthday: { day: 14, month: 3 }
        },

        { 
            name: 'Alia Bhatt', 
            image: 'https://m.media-amazon.com/images/M/MV5BNzlmZWI2YjAtOGQ3ZC00NTFjLThkMzItYTRiOGFiNzFjOTdlXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg',
            bio: 'Alia Bhatt is an Indian actress and singer known for her work in Bollywood films. She made her acting debut in the film "Student of the Year" and has since appeared in numerous successful movies, including "Highway," "Raazi," and "Gully Boy." Bhatt\'s versatility, natural acting ability, and on-screen charm have earned her critical acclaim and several awards. She continues to be a prominent figure in the Indian film industry.',
            birthday: { day: 15, month: 3 }
        },
        { 
            name: 'Alexandra Daddario', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROW8OzA70UWVNYxacQrikJ1W30LFFE_JqBiOzmu65g4A&s',
            bio: 'Alexandra Daddario is an American actress known for her roles in film and television. She gained recognition for her portrayal of Annabeth Chase in the "Percy Jackson" film series and has since appeared in movies like "San Andreas," "Baywatch," and "We Summon the Darkness." Daddario\'s talent, beauty, and on-screen presence have made her a rising star in Hollywood.',
            birthday: { day: 16, month: 3 }
        },
        { 
            name: 'Rajpal Yadav', 
            image: 'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2018/03/rajpal-yadav-1521291614.jpg',
            bio: 'Rajpal Yadav is an Indian actor known for his comedic roles in Hindi cinema. He has appeared in numerous films, showcasing his talent for humor and timing. Yadav\'s memorable performances in movies like "Hungama," "Bhool Bhulaiyaa," and "Chup Chup Ke" have earned him a dedicated fan base and recognition as one of the finest comedians in Bollywood.',
            birthday: { day: 16, month: 3 }
        },
        { 
            name: 'Kalpana Chawla', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnmhOlInGH-e1gWkx2glZNx5IVrGOchJBWj3PEzR-MKg&s',
            bio: 'Kalpana Chawla was an Indian-American astronaut and the first woman of Indian origin in space. She first flew on the Space Shuttle Columbia in 1997 as a mission specialist and primary robotic arm operator. Tragically, she lost her life during the re-entry of the Space Shuttle Columbia disaster in 2003. Chawla\'s legacy continues to inspire millions, symbolizing the pursuit of dreams and the spirit of exploration.',
            birthday: { day: 17, month: 3 }
        },
        { 
            name: 'Saina Nehwal', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKEImMifL8syTaHWbC1B09O7WH3L2s_u_Ye7dVJ8VERg&s',
            bio: 'Saina Nehwal is an Indian badminton player who has achieved numerous accolades in her career. She has won multiple international tournaments, including an Olympic bronze medal at the 2012 London Olympics, making her the first Indian to win an Olympic medal in badminton. Nehwal\'s dedication, skill, and determination have made her one of the most celebrated athletes in India.',
            birthday: { day: 17, month: 3 }
        },
        { 
            name: 'Adam Levine', 
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/AdamLevine2011.jpg/1200px-AdamLevine2011.jpg',
            bio: 'Adam Levine is an American singer, songwriter, and musician, best known as the lead vocalist of the pop-rock band Maroon 5. With hits like "Moves Like Jagger" and "Sugar," Maroon 5 has achieved worldwide success and earned multiple Grammy Awards. Levine\'s distinctive voice and charismatic stage presence have made him a prominent figure in the music industry. Additionally, he has served as a coach on the reality singing competition show "The Voice."',
            birthday: { day: 18, month: 3 }
        },
        { 
            name: 'Gayatri Joshi', 
            image: 'https://www.bollywoodshaadis.com/img/article-2023720713534850028000.jpg',
            bio: 'Gayatri Joshi is an Indian actress and former model known for her work in Hindi cinema. She gained recognition for her role in the critically acclaimed film "Swades," where she starred opposite Shah Rukh Khan. Joshi\'s performance earned her praise and accolades, showcasing her talent and potential in the Indian film industry. Though she has appeared in a limited number of films, her impact continues to be remembered by fans of Indian cinema.',
            birthday: { day: 20, month: 3 }
        },
        
        { 
            name: 'Rani Mukerji', 
            image: 'https://i.pinimg.com/originals/3e/15/6b/3e156bd9bdb7b0b105853b2be4a456ac.jpg',
            bio: 'Rani Mukerji is an Indian actress known for her versatile performances in Bollywood films. She gained recognition for her roles in movies like "Kuch Kuch Hota Hai," "Black," and "Mardaani." Mukerji\'s talent, charisma, and on-screen presence have earned her critical acclaim and numerous awards, making her one of the most acclaimed actresses in Indian cinema. She continues to captivate audiences with her compelling performances and diverse film choices.',
            birthday: { day: 21, month: 3 }
        },
        { 
            name: 'Yogi Babu', 
            image: 'https://static.toiimg.com/thumb/msid-84586633/84586633.jpg?width=500&resizemode=4',
            bio: 'Yogi Babu is an Indian actor and comedian who predominantly works in the Tamil film industry. He gained recognition for his humorous roles and impeccable comic timing in movies like "Maan Karate," "Kaaki Sattai," and "Kolamavu Kokila." Babu\'s unique style and ability to evoke laughter have made him a popular figure among Tamil cinema audiences. He continues to entertain viewers with his comedic performances and has become a sought-after actor in the industry.',
            birthday: { day: 21, month: 3 }
        },
        { 
            name: 'Dhvani Bhanushali', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO5uU0J0V4rRkEaucv5ImpwHuDNdr7bvHXytJEiL4ZgA&s',
            bio: 'Dhvani Bhanushali is an Indian singer known for her work in Bollywood and independent music. She gained fame with her debut single "Leja Re" and has since delivered several hit songs like "Vaaste" and "Dilbar." Bhanushali\'s melodious voice and captivating performances have earned her widespread acclaim and a dedicated fan following. She continues to be a rising star in the Indian music industry, with numerous chart-topping hits to her name.',
            birthday: { day: 22, month: 3 }
        },
        { 
            name: 'Kangana Ranaut', 
            image: 'https://pbs.twimg.com/profile_images/1722651180294193156/GbQSBkk5_400x400.jpg',
            bio: 'Kangana Ranaut is an Indian actress known for her bold and versatile performances in Hindi cinema. She has portrayed a wide range of characters in films like "Queen," "Tanu Weds Manu," and "Manikarnika: The Queen of Jhansi." Ranaut\'s talent, fearlessness, and outspoken nature have made her a prominent figure in Bollywood. She has won several awards, including multiple National Film Awards, for her exceptional performances.',
            birthday: { day: 23, month: 3 }
        },
        { 
            name: 'The Undertaker', 
            image: 'https://www.usanetwork.com/sites/usablog/files/2023/06/wwe-undertaker-dream-match1.jpg',
            bio: 'The Undertaker, whose real name is Mark William Calaway, is an American retired professional wrestler and one of the most iconic figures in the history of WWE (World Wrestling Entertainment). Known for his ominous persona, dark-themed ring attire, and unparalleled longevity, The Undertaker had a legendary career spanning over three decades. He is widely regarded as one of the greatest professional wrestlers of all time and has achieved numerous championships and accolades throughout his illustrious career.',
            birthday: { day: 24, month: 3 }
        },
        { 
            name: 'Emraan Hashmi', 
            image: 'https://assets.telegraphindia.com/telegraph/2024/Feb/1708056771_emraan-hashmi.jpg',
            bio: 'Emraan Hashmi is an Indian actor known for his work in Hindi cinema, often referred to as the "serial kisser" for his roles in romantic thrillers. He gained fame with movies like "Murder," "Gangster," and "Once Upon a Time in Mumbaai." Hashmi\'s ability to portray complex characters with intensity and charm has earned him a dedicated fan base and critical acclaim. He continues to be a prominent figure in Bollywood, known for his versatility and unconventional film choices.',
            birthday: { day: 24, month: 3 }
        },
        { 
            name: 'Jenny Slate', 
            image: 'https://media.npr.org/assets/img/2022/07/13/gettyimages-1393076914_custom-b75f19f7c2381cd3f3718aa2afe5f1436ab1436a.jpg?s=1100&c=50&f=jpeg',
            bio: 'Jenny Slate is an American actress, comedian, and author known for her witty humor and versatile performances. She gained recognition for her work on "Saturday Night Live" and has since appeared in numerous films and television shows. Slate is also a talented voice actress, lending her voice to characters in animated films like "Zootopia" and "The Secret Life of Pets." Her unique comedic style and engaging performances have earned her a dedicated following and critical acclaim.',
            birthday: { day: 25, month: 3 }
        },
        { 
            name: 'Larry Page', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyNQITUOTQ9IMahljy1AMLWKG8Cbr_01eqFRqZ1zTs4A&s',
            bio: 'Larry Page co-founded Google, revolutionizing online search and building it into a global powerhouse. He later served as CEO of Alphabet Inc., overseeing diverse projects from self-driving cars to life sciences, leaving a profound impact on the tech industry.',
            birthday: { day: 26, month: 3 }
        },
        { 
            name: 'Lady Gaga', 
            image: 'https://hips.hearstapps.com/hmg-prod/images/lady-gaga-arrives-at-the-premiere-of-warner-bros-pictures-a-news-photo-1044029654-1552484307.jpg?crop=0.670xw:1.00xh;0.196xw,0&resize=1200:*',
            bio: 'Lady Gaga, born Stefani Joanne Angelina Germanotta, is an American singer, songwriter, and actress known for her boundary-pushing music and bold fashion. With hits like "Bad Romance" and "Poker Face," she has become one of the best-selling music artists of all time. Gaga\'s unique style, powerful voice, and activism have made her a cultural icon worldwide.',
            birthday: { day: 28, month: 3 }
        },
        { 
            name: 'Anu Emmanuel', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrdHCrM6R1ScLYMZoETYZd13mqmnfKdSzOg1na2IayFA&s',
            bio: 'Anu Emmanuel is an Indian actress who primarily works in the Telugu and Malayalam film industries. She made her acting debut in the Malayalam film "Swapna Sanchari" and gained recognition for her role in the Telugu film "Majnu." Emmanuel has since appeared in several successful movies, showcasing her acting talent and charm on screen. She continues to be a prominent figure in South Indian cinema.',
            birthday: { day: 28, month: 3 }
        },
        { 
            name: 'Priti Patel', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYNVccwxxEDYTvHMzhmpDK4JC6WEuOTr91wbLz_DQDnQ&s',
            bio: 'Priti Patel is a British politician serving as the Secretary of State for the Home Department since 2019. A member of the Conservative Party, she has held various ministerial positions in the UK government, including Secretary of State for International Development. Patel is known for her conservative stance on immigration and law enforcement, making her a controversial figure in British politics.',
            birthday: { day: 29, month: 3 }
        },
        { 
            name: ' Vincent van Gogh', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3uf5u9BieF2330A96QjQDL-nyxLKCMaMR5TofgIfMQg&s',
            bio: 'Vincent van Gogh was a Dutch Post-Impressionist painter who is among the most famous and influential figures in the history of Western art. His unique style, characterized by bold colors, dramatic brushwork, and emotional intensity, has had a profound impact on the development of modern art. Despite struggling with mental illness and poverty throughout his life, van Gogh created over 2,000 artworks, including iconic masterpieces like "Starry Night" and "Sunflowers." Today, he is celebrated as one of the greatest artists of all time.',
            birthday: { day: 30, month: 3 }
        },
        { 
            name: 'Christopher Walken', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZHber8POYPfD9HB0KFVQPJ6-R4PgI_xJPing-rBqpnA&s',
            bio: 'Christopher Walken is an American actor known for his distinctive voice, eccentric characters, and memorable performances in film and television. He has appeared in numerous iconic movies, including "The Deer Hunter," "Pulp Fiction," and "Catch Me If You Can." Walken\'s versatility, intensity, and unique style have earned him critical acclaim and a dedicated fan following. He is recognized as one of the most talented and versatile actors of his generation.',
            birthday: { day: 31, month: 3 }
        },
        //Month April 
        { 
            name: 'Sri Divya', 
            image: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/sri-divya-32730-24-03-2017-17-32-33.jpg',
            bio: 'Sri Divya is an Indian actress known for her work primarily in Tamil and Telugu cinema. She made her acting debut in the Telugu film "Manasara" and gained recognition for her roles in movies like "Varuthapadatha Valibar Sangam" and "Bangalore Naatkal." Divya\'s charming on-screen presence and versatile performances have earned her a dedicated fan base in the South Indian film industry.',
            birthday: { day: 1, month: 4 }
        },
        { 
            name: ' Logan Paul', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgPciZRAYjGfFT62K8nUZ0k6hlT7P1BU2mGrvz-MBVeg&s',
            bio: 'Logan Paul is an American YouTuber, internet personality, and professional boxer known for his controversial content and massive online following. He gained fame on the video-sharing platform YouTube, where he uploads vlogs, comedy sketches, and other content. Despite facing criticism for some of his actions, Paul has amassed millions of subscribers and continues to be a prominent figure in online media. Additionally, he has ventured into professional boxing, participating in high-profile matches against fellow YouTubers and professional boxers.',
            birthday: { day: 1, month: 4 }
        },
        { 
            name: 'Ajay Devgn', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0tY1NGSWbbeBk-osNwcSbMmBAkXdFKyCdQvfNKYBxUA&s',
            bio: 'Ajay Devgn is an Indian actor, director, and producer known for his work in Hindi cinema. He gained recognition for his intense performances in movies like "Phool Aur Kaante," "Singham," and "Golmaal." Devgn\'s versatility, charisma, and dedication to his craft have earned him critical acclaim and numerous awards, making him one of the most respected actors in Bollywood. He continues to entertain audiences with his diverse roles and successful films.',
            birthday: { day: 2, month: 4 }
        },
        { 
            name: 'Kapil Sharma', 
            image: 'https://yt3.googleusercontent.com/XVVi44_WFTkdPXYorOffTEJ51xPacaBdx_-peDEao52ZHF8DdfuJz76IZLQI3hNwulwnHrBHIQ=s900-c-k-c0x00ffffff-no-rj',
            bio: 'Kapil Sharma is an Indian comedian, actor, and television host known for his popular comedy show "The Kapil Sharma Show." He gained fame with his stand-up comedy performances and later transitioned into hosting successful television programs. Sharma\'s wit, humor, and comic timing have made him a household name in India, and his show remains one of the most-watched and beloved comedy programs on television.',
            birthday: { day: 2, month: 4 }
        },
        { 
            name: 'Marlon Brando', 
            image: 'https://cdn.britannica.com/59/78559-050-3F49B448/Marlon-Brando-American-role-The-Godfather-Don.jpg',
            bio: 'Marlon Brando was an American actor and cultural icon known for his groundbreaking performances in film and theater. He rose to prominence with his roles in classics like "A Streetcar Named Desire," "The Godfather," and "On the Waterfront." Brando\'s naturalistic acting style and intensity revolutionized the craft of acting, earning him widespread acclaim and multiple Academy Awards. Beyond his talent on screen, he was also known for his activism and influence on Hollywood.',
            birthday: { day: 3, month: 4 }
        },
        { 
            name: 'Prabhu Deva', 
            image: 'https://img.onmanorama.com/content/dam/mm/en/entertainment/2020/prabhudeva.jpg',
            bio: '',
            birthday: { day: 3, month: 4 }
        },
        { 
            name: 'Heath Ledger', 
            image: 'https://hips.hearstapps.com/hmg-prod/images/heath_ledger_getty_images_photo_bob_riha_jr_wireimage_116948085.jpg?crop=1xw:1.0xh;center,top&resize=640:*',
            bio: 'Heath Ledger was an Australian actor known for his captivating performances in film and television. He gained widespread recognition for his role as the Joker in "The Dark Knight," for which he posthumously won the Academy Award for Best Supporting Actor. Ledger\'s talent, versatility, and commitment to his craft earned him acclaim and admiration from audiences and critics alike. He remains a revered figure in the entertainment industry, remembered for his immense talent and contributions to cinema.',
            birthday: { day: 5, month: 4 }
        },
        { 
            name: 'Robert Downey Jr.', 
            image: 'https://cdn.britannica.com/70/129770-050-AEBE1EB9/Robert-Downey-Jr-2008.jpg',
            bio: 'Robert Downey Jr. is an American actor and producer known for his iconic portrayal of Tony Stark/Iron Man in the Marvel Cinematic Universe. He gained fame for his roles in films like "Chaplin," "Sherlock Holmes," and "Tropic Thunder." Downey\'s charismatic performances, wit, and charm have made him one of the most beloved and highest-paid actors in Hollywood. Off-screen, he has overcome personal struggles to become a respected figure in the entertainment industry.',
            birthday: { day: 5, month: 4 }
        },
        { 
            name: 'Simran', 
            image: 'https://i.pinimg.com/736x/3e/8d/83/3e8d839982b2b2ebe6c1afed3940382d.jpg',
            bio: 'Simran is an Indian actress who primarily works in Tamil, Telugu, and Hindi cinema. She gained recognition for her roles in movies like "Vaalee," "Kannathil Muthamittal," and "Vaanam." Simran\'s captivating performances, beauty, and versatility have earned her a dedicated fan following in the South Indian film industry. She continues to be a prominent figure in Indian cinema, known for her talent and charm on screen.',
            birthday: { day: 5, month: 4 }
        },
        { 
            name: 'Rashmika Mandanna', 
            image: 'https://datatrained.com/dt-fun/wp-content/uploads/2023/02/Rashmika-Madanna-Age.jpg',
            bio: 'Rashmika Mandanna is an Indian actress who predominantly works in the Telugu and Kannada film industries. She gained recognition for her roles in movies like "Geetha Govindam," "Dear Comrade," and "Sarileru Neekevvaru." Mandanna\'s natural acting talent, charm, and versatility have earned her widespread acclaim and a dedicated fan following in South Indian cinema. She continues to be a prominent and sought-after actress in the industry.',
            birthday: { day: 6, month: 4 }
        },
        { 
            name: 'Rabindranath Tagore', 
            image: 'https://feeds.abplive.com/onecms/images/uploaded-images/2021/05/09/c7f9631c60c5ca6828f327a1420cb08df446c.jpg?impolicy=abp_cdn&imwidth=720',
            bio: 'Rabindranath Tagore was a Bengali poet, writer, musician, and artist who reshaped Bengali literature and music in the late 19th and early 20th centuries. He became the first non-European to win the Nobel Prize in Literature in 1913 for his collection of poems, "Gitanjali." Tagore\'s legacy extends beyond literature; he was also a social reformer, philosopher, and educator, influencing various aspects of Indian culture and society.',
            birthday: { day: 7, month: 4 }
        },
        { 
            name: 'MrBeast', 
            image: 'https://i.insider.com/65d27bcbf533b039a88509c6?width=800&format=jpeg&auto=webp',
            bio: 'MrBeast, also known as Jimmy Donaldson, is an American YouTuber, philanthropist, and entrepreneur known for his extravagant and charitable stunts. He gained fame for his attention-grabbing challenges, giveaways, and large donations to various causes. MrBeast\'s creative content, generosity, and positive impact on his community have earned him millions of subscribers and widespread admiration on YouTube. He continues to inspire others with his innovative approach to content creation and philanthropy.',
            birthday: { day: 7, month: 4 }
        },
        { 
            name: 'Kristen Stewart', 
            image: 'https://media.vanityfair.com/photos/5f7ddcf9e8db9d15dff9ba4b/master/pass/kstew.jpg',
            bio: 'Kristen Stewart is an American actress known for her roles in both independent and mainstream films. She gained widespread recognition for her portrayal of Bella Swan in the "Twilight" film series. Stewart has since starred in a variety of projects, including "Still Alice," "Clouds of Sils Maria," and "Charlie\'s Angels." Known for her versatility and naturalistic acting style, she has earned critical acclaim and numerous awards throughout her career.',
            birthday: { day: 9, month: 4 }
        },
        { 
            name: 'Sanjeev Kapoor', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSoK04wzMXGd-8lbbqtVzFrx7RTfkNT-BXnG6s45D2LA&s',
            bio: 'Sanjeev Kapoor is an Indian chef, entrepreneur, and television personality known for his contributions to Indian cuisine. He gained fame with his cooking show "Khana Khazana," which became one of the longest-running cooking shows in Asia. Kapoor has authored numerous cookbooks, hosted various culinary shows, and established restaurants worldwide. His innovative approach to traditional Indian recipes and his passion for cooking have made him a household name and a prominent figure in the culinary world.',
            birthday: { day: 10, month: 4 }
        },
        { 
            name: 'Sasi', 
            image: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/sasi-8983-24-03-2017-12-52-06.jpg',
            bio: 'Sasi is a common South Indian name, and without further context, it\'s challenging to provide a specific bio. However, in the context of the film industry, Sasi could refer to several individuals, including directors, actors, or other professionals. If you have a specific Sasi in mind or more details, I can provide a tailored bio.',
            birthday: { day: 11, month: 4 }
        },
        { 
            name: 'Bejoy Nambiar', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScfzbmzvQrB-Ohv2WUIcmcbXx9jZIjWilhSlwW5KyuIw&s',
            bio: 'Bejoy Nambiar is an Indian filmmaker known for his work in Hindi and Tamil cinema. He gained recognition for his directorial debut with the critically acclaimed film "Shaitan." Nambiar\'s unique storytelling style, visual flair, and ability to blend different genres have earned him praise from audiences and critics alike. He continues to explore new avenues in filmmaking, establishing himself as one of the promising directors in Indian cinema.',
            birthday: { day: 12, month: 4 }
        },
        { 
            name: 'Thomas Jefferson', 
            image: 'https://mediaproxy.salon.com/width/1200/height/675/https://media2.salon.com/2021/10/thomas-jefferson-1025211.jpg',
            bio: 'Thomas Jefferson was an American statesman, diplomat, lawyer, architect, philosopher, and Founding Father who served as the third President of the United States from 1801 to 1809. He was the principal author of the Declaration of Independence, advocating for individual rights and freedom. Jefferson\'s legacy includes his contributions to American democracy, such as the Louisiana Purchase and the founding of the University of Virginia. He is remembered as one of the most influential figures in American history.',
            birthday: { day: 13, month: 4 }
        },
        { 
            name: 'B. R. Ambedkar', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQhgOhij3qFphRpnWYXKr3qyxSzyeSbVl1_RheLxQ-FB8MzqkQKGqc_e0hSZVIpjRmiKA&usqp=CAU',
            bio: 'B. R. Ambedkar, also known as Babasaheb Ambedkar, was an Indian jurist, economist, politician, and social reformer who campaigned against social discrimination towards the untouchables, whom he termed "Dalits." He played a pivotal role in drafting the Constitution of India and is often referred to as the "Father of the Indian Constitution." Ambedkar also founded the Independent Labour Party and the Republican Party of India to advocate for the rights of marginalized communities. His tireless efforts for social justice and equality continue to inspire millions.',
            birthday: { day: 14, month: 4 }
        },
        { 
            name: 'Anita Hassanandani', 
            image: 'https://img.indiaforums.com/person/480x360/0/2231-anita-hassanandani.jpg?c=1cYC67',
            bio: 'Anita Hassanandani is an Indian actress and model known for her work in Hindi television serials and films. She gained recognition for her roles in popular TV shows like "Kabhii Sautan Kabhii Sahelii" and "Yeh Hai Mohabbatein." Hassanandani\'s versatile performances, charming persona, and stylish presence have made her a household name in the Indian entertainment industry. She continues to captivate audiences with her talent and versatility on screen.',
            birthday: { day: 14, month: 4 }
        },
        { 
            name: 'Emma Watson', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT01Bo-EWgJgMO5yk2JUHVb-Tvao9m5RiPS_GaCN6z1sQ&s',
            bio: 'Emma Watson is a British actress, model, and activist known for her role as Hermione Granger in the "Harry Potter" film series. She gained international fame at a young age for her portrayal of the intelligent and resourceful character. Beyond acting, Watson is an outspoken advocate for gender equality and women\'s rights, serving as a UN Women Goodwill Ambassador and launching the HeForShe campaign. She continues to inspire audiences with her talent, intelligence, and dedication to social causes.',
            birthday: { day: 15, month: 4 }
        },
        { 
            name: 'Leonardo da Vinci', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuLL3rkqMvmPXkL9jz-pWU9hpl09KXVxfDHVszCZozkg&s',
            bio: 'Leonardo da Vinci was an Italian polymath, widely considered one of the greatest artists, inventors, and thinkers of all time. He is known for his iconic paintings such as the "Mona Lisa" and "The Last Supper," which showcase his mastery of techniques like sfumato and perspective. In addition to his contributions to art, da Vinci made significant strides in anatomy, engineering, and science, sketching designs for inventions like the flying machine and parachute. His insatiable curiosity and innovative spirit continue to inspire generations of artists and thinkers around the world.',
            birthday: { day: 15, month: 4 }
        },
        { 
            name: 'Akon', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrr7NzghhLfQ2kIp_DTvbMxOizH4Q6XlYStsL7Viwz4g&s',
            bio: 'Akon, born Aliaune Thiam, is a Senegalese-American singer, songwriter, and entrepreneur known for his influential contributions to music and philanthropy. He gained fame with hits like "Smack That" and "Lonely," which propelled him to international stardom. Beyond music, Akon has established himself as a successful businessman, with ventures in renewable energy, cryptocurrency, and philanthropy, particularly in Africa through his Akon Lighting Africa initiative. He continues to be a prominent figure in the entertainment industry and a leading voice for social change.',
            birthday: { day: 16, month: 4 }
        },
        { 
            name: 'Siddharth', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlnKSGz8XR7zhrrWHRzd3i5VDQb5bpWOqcs5xm_qlhTQ&s',
            bio: 'Siddharth is an Indian actor, producer, and playback singer known for his work in Tamil, Telugu, and Hindi cinema. He gained recognition for his roles in movies like "Rang De Basanti," "Boys," and "Aaytha Ezhuthu." Siddharth\'s versatility, charm, and talent have earned him critical acclaim and a dedicated fan following in the Indian film industry. He continues to be a prominent figure, known for his impactful performances and social activism.',
            birthday: { day: 17, month: 4 }
        },
        { 
            name: 'K. L. Rahul', 
            image: 'https://c.ndtvimg.com/2023-12/6k3k037_kl-rahul-afp_625x300_23_December_23.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605',
            bio: 'K. L. Rahul, whose full name is Kannur Lokesh Rahul, is an Indian cricketer who represents the Indian national team in international cricket and plays domestically for various franchises in the Indian Premier League (IPL). He is a stylish right-handed batsman and occasional wicket-keeper known for his elegant stroke play and ability to score runs across all formats of the game. Rahul has established himself as a key player in the Indian cricket team and has garnered a reputation as one of the finest batsmen in contemporary cricket.',
            birthday: { day: 18, month: 4 }
        },
        { 
            name: 'Mukesh Ambani', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsafFUjgN314qD8KIw2j5UV9BAM7Q2MWQ96ueO6p8XRg&s',
            bio: 'Mukesh Ambani is an Indian billionaire businessman, chairman, and largest shareholder of Reliance Industries Limited (RIL), a conglomerate with interests in petrochemicals, refining, oil, telecommunications, and retail. He is one of the wealthiest individuals globally, known for his visionary leadership and strategic business acumen, transforming Reliance into one of India\'s largest and most profitable companies, pioneering initiatives like Jio, which revolutionized the telecommunications industry.',
            birthday: { day: 19, month: 4 }
        },
        { 
            name: 'James Franco', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgvuwcbBn82yNKk63fMEtvKc3hY8I2prBL40WQvdydgg&s',
            bio: 'James Franco is an American actor, filmmaker, and academic known for his versatile performances in film and television. He gained fame with roles in movies like "127 Hours," "Pineapple Express," and "The Disaster Artist," which earned him critical acclaim and a Golden Globe Award. Franco\'s talent, creativity, and dedication to his craft have made him a prominent figure in Hollywood, with achievements in acting, directing, and producing.',
            birthday: { day: 19, month: 4 }
        },
        { 
            name: 'Adolf Hitler', 
            image: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-615312714.jpg',
            bio: 'Adolf Hitler was a German politician and dictator who led the Nazi Party and rose to power as Chancellor of Germany in 1933. He is infamous for his role in World War II and the Holocaust, during which millions of Jews and others were systematically murdered. Hitler\'s fascist policies and aggressive expansionist goals led to widespread devastation and loss of life across Europe. He remains one of the most reviled figures in history, his name synonymous with tyranny, genocide, and the horrors of war.',
            birthday: { day: 20, month: 4 }
        },
        { 
            name: 'N. Chandrababu Naidu', 
            image: 'https://m.economictimes.com/thumb/msid-76449029,width-1200,height-900,resizemode-4,imgsize-433883/chandrababunaidu-bccl.jpg',
            bio: 'N. Chandrababu Naidu is an Indian politician and former Chief Minister of Andhra Pradesh. He played a key role in the economic transformation of the state during his tenure, implementing various reforms to promote industry, technology, and infrastructure development. Naidu is known for his vision and leadership in promoting IT and digitalization, earning Andhra Pradesh the reputation of being India\'s "Cyberabad." He continues to be an influential figure in Indian politics, advocating for economic growth and development.',
            birthday: { day: 20, month: 4 }
        },
        { 
            name: 'Shivaji Satam', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSLYs_ISQ6xEQ3Ds10VIKJ5ZWB4bSjWtpcmt2m_CdYCQ&s',
            bio: 'Shivaji Satam is an Indian actor known for his work primarily in Hindi and Marathi cinema and television. He gained widespread recognition for his portrayal of ACP Pradyuman in the popular television series "CID," which became one of the longest-running television shows in Indian history. Satam\'s commanding presence, versatility, and portrayal of the iconic character have earned him immense popularity and a dedicated fan following. He continues to be a respected figure in the Indian entertainment industry.',
            birthday: { day: 21, month: 4 }
        },
        { 
            name: 'J. Robert Oppenheimer', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5fyymqROxibIS2EesYyaclIsk8xAzSrXjThaODfYSfVkzCQ8yRojoD9TfRKjDma4toIc&usqp=CAU',
            bio: 'J. Robert Oppenheimer was an American theoretical physicist and professor who is often referred to as the "father of the atomic bomb." He played a crucial role in the Manhattan Project, the World War II initiative that developed the first nuclear weapons. Oppenheimer\'s leadership and scientific contributions led to the successful creation of the atomic bomb, which was later used in the bombings of Hiroshima and Nagasaki in 1945. Despite his pivotal role in the project, Oppenheimer later became a vocal advocate for nuclear disarmament and opposed the development of the hydrogen bomb.',
            birthday: { day: 22, month: 4 }
        },
        { 
            name: 'Amber Heard', 
            image: 'https://i0.wp.com/www.thewrap.com/wp-content/uploads/2024/01/amber-heard.jpg?fit=990%2C557&ssl=1',
            bio: 'Amber Heard is an American actress and model known for her roles in film and television. She gained fame with performances in movies like "Pineapple Express," "The Rum Diary," and "Aquaman." Heard is also recognized for her advocacy work on issues like domestic violence and LGBTQ+ rights. She continues to be a prominent figure in Hollywood, known for her talent, beauty, and activism.',
            birthday: { day: 22, month: 4 }
        },
        
        { 
            name: 'John Cena', 
            image: 'https://deadline.com/wp-content/uploads/2024/01/john-cena-wwe-retiring.jpg?w=681&h=383&crop=1',
            bio: 'John Cena is an American wrestler, actor, and TV personality known for his success in WWE, where he won multiple championships. He\'s also appeared in films like "Trainwreck" and "F9." Cena is recognized for his extensive philanthropy work, having granted over 650 wishes for the Make-A-Wish Foundation. He remains prominent in wrestling and entertainment.',
            birthday: { day: 23, month: 4 }
        },
        { 
            name: 'Manoj Bajpayee', 
            image: 'https://www.financialexpress.com/wp-content/uploads/2024/01/manoj-bajpayee.jpg',
            bio: 'Manoj Bajpayee is an Indian actor known for his versatile performances in Hindi cinema. He gained recognition for his roles in movies like "Satya," "Gangs of Wasseypur," and "Aligarh." Bajpayee\'s intense portrayal of complex characters and his ability to delve into the depths of human emotion have earned him critical acclaim and numerous awards. He continues to be a respected figure in the Indian film industry, admired for his talent and dedication to his craft.',
            birthday: { day: 23, month: 4 }
        },
        { 
            name: 'Sachin Tendulkar', 
            image: 'https://hips.hearstapps.com/hmg-prod/images/indian-cricket-legend-sachin-teldulkar-poses-for-a-news-photo-1701204803.jpg?crop=0.668xw:1.00xh;0.153xw,0&resize=640:*',
            bio: 'Sachin Tendulkar is an Indian former cricketer widely regarded as one of the greatest batsmen in the history of cricket. He is known for his record-breaking achievements, including being the first player to score 100 international centuries. Tendulkar\'s illustrious career spanned over two decades, during which he represented India in numerous matches and tournaments, captivating fans with his masterful batting technique and sportsmanship. He remains an icon in the world of cricket, inspiring generations of players and fans alike with his humility, dedication, and love for the game.',
            birthday: { day: 24, month: 4 }
        },
        { 
            name: 'Varun Dhawan', 
            image: 'https://pragativadi.com/wp-content/uploads/2022/11/varun.jpeg',
            bio: 'Varun Dhawan is an Indian actor known for his work in Hindi cinema. He gained recognition for his debut performance in the film "Student of the Year" and has since appeared in numerous successful movies like "Badlapur," "Humpty Sharma Ki Dulhania," and "Judwaa 2." Dhawan\'s charm, versatility, and ability to connect with audiences have earned him a significant fan following. He continues to be a prominent figure in Bollywood, known for his entertaining performances and box office success.',
            birthday: { day: 24, month: 4 }
        },
        { 
            name: 'Arijit Singh', 
            image: 'https://c.saavncdn.com/artists/Arijit_Singh_002_20230323062147_500x500.jpg',
            bio: 'Arijit Singh is an Indian playback singer known for his soulful and versatile voice in Hindi cinema. He gained widespread recognition with songs like "Tum Hi Ho" from "Aashiqui 2" and "Channa Mereya" from "Ae Dil Hai Mushkil." Singh\'s ability to convey emotion through his vocals and his knack for delivering chart-topping hits have made him one of the most sought-after singers in Bollywood. He continues to captivate audiences with his melodious voice and continues to be a prominent figure in the Indian music industry.',
            birthday: { day: 25, month: 4 }
        },
        { 
            name: 'Samuthirakani', 
            image: 'https://images.filmibeat.com/img/popcorn/profile_photos/samuthirakani-20190628103559-3370.jpg',
            bio: 'Samuthirakani is an Indian actor and filmmaker known for his work in Tamil cinema. He gained recognition for his roles in movies like "Subramaniapuram," "Nadodigal," and "Visaaranai." Samuthirakani\'s performances often portray socially relevant themes and showcase his versatility as an actor. In addition to acting, he has directed and produced several acclaimed films, earning him praise for his storytelling and directorial skills. He continues to be a respected figure in the Tamil film industry, known for his impactful contributions to cinema.',
            birthday: { day: 26, month: 4 }
        },
        { 
            name: 'Jenna Coleman', 
            image: 'https://hips.hearstapps.com/hmg-prod/images/jc-elle-chanel-websize-3-64abc46fa71ed.jpg?crop=1xw:0.5357666015625xh;center,top&resize=1200:*',
            bio: 'Jenna Coleman is an English actress known for her roles in both television and film. She gained widespread recognition for portraying Clara Oswald in the long-running British television series "Doctor Who." Coleman\'s talent, charm, and versatility have earned her critical acclaim and a dedicated fan following. She has also appeared in other notable projects, including "Victoria," where she played the titular role of Queen Victoria. Coleman continues to be a prominent figure in British entertainment, admired for her captivating performances and range as an actress.',
            birthday: { day: 27, month: 4 }
        },
        { 
            name: 'Samantha', 
            image: 'https://images.filmibeat.com/img/popcorn/profile_photos/samantha-ruth-prabhu-20211017172448-1326.jpg',
            bio: 'Samantha is a prominent Indian actress known for her work primarily in Telugu and Tamil cinema. She gained recognition for her performances in movies like "Ye Maaya Chesave," "Eega," and "Rangasthalam." Samantha\'s talent, versatility, and captivating screen presence have earned her critical acclaim and a dedicated fan following in the South Indian film industry. She continues to be a sought-after actress, known for her ability to portray a wide range of characters with depth and authenticity.',
            birthday: { day: 28, month: 4 }
        },
        { 
            name: 'Katherine Langford', 
            image: 'https://static.wikia.nocookie.net/geminidiaries/images/c/cf/Katherine_Langford.jpg/revision/latest?cb=20200608173223',
            bio: 'Katherine Langford is an Australian actress known for her breakout role as Hannah Baker in the Netflix series "13 Reasons Why." Her performance garnered critical acclaim and earned her nominations for several awards. Langford has since appeared in films like "Love, Simon" and "Knives Out," showcasing her versatility as an actress. With her talent and captivating presence on screen, she continues to be a rising star in the entertainment industry.',
            birthday: { day: 29, month: 4 }
        },
        { 
            name: 'Ana de Armas', 
            image: 'https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2020/03/05/5e635e26-587a-11ea-b438-8452af50d521_image_hires_151135.JPG?itok=5TqsK0Jq&v=1583392305',
            bio: 'Ana de Armas is a Cuban-Spanish actress known for her roles in both Spanish and Hollywood films. She gained international recognition for her performances in movies like "Blade Runner 2049" and "Knives Out." De Armas\' talent, beauty, and versatility have earned her critical acclaim and a growing fan base. With her captivating screen presence and ability to portray a variety of characters, she continues to be a prominent figure in the film industry, with several high-profile projects in the works.',
            birthday: { day: 30, month: 4 }
        },
        { 
            name: 'Gal Gadot', 
            image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202105/gq-gal-gadot-accent.jpg',
            bio: 'Gal Gadot is an Israeli actress, model, and producer known for her role as Wonder Woman in the DC Extended Universe superhero films. She gained international fame with her portrayal of the iconic character, beginning with "Batman v Superman: Dawn of Justice" and continuing in "Wonder Woman" and its sequel "Wonder Woman 1984." Gadot\'s portrayal of the strong and compassionate superhero has earned her widespread acclaim and made her a role model for many. Beyond her work as Wonder Woman, she has appeared in other films and continues to be a prominent figure in Hollywood.',
            birthday: { day: 30, month: 4 }
        },
        // Month May
        {
            name: 'Anushka Sharma', 
            image: 'https://shoesandaccessories.in/wp-content/uploads/2018/09/PARI3465-2-e1536039997617.jpg',
            bio: 'Anushka Sharma is an Indian actress and film producer known for her work in Hindi cinema. She gained recognition for her debut performance in the film "Rab Ne Bana Di Jodi" opposite Shah Rukh Khan. Sharma has since appeared in numerous successful movies like "PK," "Sultan," and "NH10," showcasing her versatility and talent as an actress. In addition to acting, she has also ventured into film production with her production company, Clean Slate Filmz. Sharma continues to be a prominent figure in Bollywood, known for her acting prowess and entrepreneurial spirit.',
            birthday: { day: 1, month: 5 }
        },
        { 
            name: 'Anand Mahindra', 
            image: 'https://www.forbesindia.com/media/images/2013/Oct/img_72305_anand_mahindra.jpg',
            bio: 'Anand Mahindra is an Indian billionaire businessman and the chairman of the Mahindra Group, a multinational conglomerate with interests in automotive, aerospace, agribusiness, and more. Under his leadership, the Mahindra Group has expanded globally and diversified its portfolio, becoming one of India\'s leading corporate entities. Mahindra is also known for his active presence on social media, where he shares insights, promotes innovation, and engages with a wide audience. He is recognized as a visionary leader and a prominent figure in the Indian business community.',
            birthday: { day: 1, month: 5 }
        },
        { 
            name: 'Ajith Kumar', 
            image: 'https://m.media-amazon.com/images/I/61N0OJrV3JL._AC_UF894,1000_QL80_.jpg',
            bio: 'Ajith Kumar, commonly known as Thala Ajith, is an Indian actor who primarily works in Tamil cinema. He is known for his versatility and dedication to his craft. Ajith made his acting debut in the film "Prema Pusthakam" and gained widespread recognition with his performances in movies like "Mankatha," "Veeram," and "Viswasam." Beyond acting, Ajith is also a skilled racer and has participated in various motorsport events. He enjoys a massive fan following, with his films often setting box office records in Tamil Nadu. Ajith is respected for his humility, philanthropy, and commitment to his profession.',
            birthday: { day: 1, month: 5 }
        },
        { 
            name: 'Dwayne Johnson', 
            image: 'https://the-talks.com/wp-content/uploads/2022/04/Dwayne-Johnson-01.jpg',
            bio: 'Dwayne Johnson, also known as "The Rock," is an American actor, producer, and former professional wrestler. He gained fame as a wrestler in the WWE (World Wrestling Entertainment), where he became one of the most popular and successful wrestlers of all time. Transitioning to acting, Johnson has starred in numerous blockbuster films, including the "Fast & Furious" series, "Jumanji: Welcome to the Jungle," and "Moana." Known for his charisma, athleticism, and larger-than-life personality, Johnson has become one of the highest-paid actors in Hollywood. He continues to entertain audiences with his action-packed performances and is admired for his philanthropy and positive influence.',
            birthday: { day: 2, month: 5 }
        },
        { 
            name: 'Rob Brydon', 
            image: 'https://static.independent.co.uk/2023/07/13/08/newFile-2.jpg?width=1200',
            bio: 'Rob Brydon is a Welsh actor, comedian, and television presenter known for his work in British comedy. He gained recognition for his roles in television shows like "Marion and Geoff" and "Gavin & Stacey," where he showcased his talent for character-driven comedy and improvisation. Brydon is also known for his role as a panelist on the comedy panel show "Would I Lie to You?" and as the host of "The Rob Brydon Show." With his quick wit, charm, and versatile comedic skills, he has become a beloved figure in the British entertainment industry.',
            birthday: { day: 3, month: 5 }
        },
        { 
            name: 'Pooja Chopra', 
            image: 'https://images.indianexpress.com/2016/08/pooja-chopra-759.jpg?w=414',
            bio: 'Pooja Chopra is an Indian actress and model known for her work in Hindi cinema. She gained recognition after winning the Femina Miss India World title in 2009. Chopra made her acting debut in the film "Fashion" and has since appeared in movies like "Commando" and "Aiyaary." She is admired for her beauty, talent, and dedication to her craft. Beyond acting, Chopra is also involved in various philanthropic activities, focusing on causes like women\'s empowerment and education. She continues to be a prominent figure in the Indian entertainment industry.',
            birthday: { day: 3, month: 5 }
        },
        { 
            name: 'Trisha', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGTbSo8GEmDBKPtStyvYff4io3JsPjIubPuTxTLDvuhw&s',
            bio: 'Trisha Krishnan, commonly known as Trisha, is an Indian actress and model who primarily works in Tamil and Telugu cinema. She gained recognition for her debut performance in the Tamil film "Mounam Pesiyadhe" and has since appeared in numerous successful movies like "Varsham," "Ghilli," and "96." Trisha is admired for her versatility, elegance, and ability to portray a wide range of characters with depth and authenticity. She has received several awards for her performances and continues to be a prominent figure in South Indian cinema.',
            birthday: { day: 4, month: 5 }
        },
        { 
            name: '', 
            image: '',
            bio: '',
            birthday: { day: 5, month: 5 }
        },
        { 
            name: 'Karl Marx', 
            image: 'https://assets.editorial.aetnd.com/uploads/2009/11/karl-marx-gettyimages-514679914.jpg',
            bio: 'Karl Marx was a German philosopher, economist, and political theorist who profoundly influenced modern political and economic thought. He is best known for his critiques of capitalism and his advocacy for socialism and communism. Marx\'s most famous works include "The Communist Manifesto" and "Das Kapital," in which he analyzed the social and economic dynamics of capitalism and proposed revolutionary changes to society. His ideas laid the groundwork for various socialist and communist movements around the world and continue to be influential in contemporary debates on economics, politics, and social justice.',
            birthday: { day: 5, month: 5 }
        },
        { 
            name: 'Henry Cavill', 
            image: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-1356675370.jpg?crop=1xw:1.0xh;center,top&resize=640:*',
            bio: 'Henry Cavill is a British actor known for his roles in film and television. He gained international fame for portraying Superman in the DC Extended Universe films, including "Man of Steel," "Batman v Superman: Dawn of Justice," and "Justice League." Cavill has also appeared in other notable projects like "The Tudors" and "Mission: Impossible – Fallout." Known for his charisma, physicality, and versatility as an actor, Cavill continues to be a prominent figure in Hollywood, with a growing fan base and numerous upcoming projects.',
            birthday: { day: 5, month: 5 }
        },
        { 
            name: 'Naomi Scott', 
            image: 'https://media.vogue.co.uk/photos/641af382914524906aad0f00/3:2/w_1997,h_1331,c_limit/GettyImages-1186180888.jpg',
            bio: 'Naomi Scott is a British actress and singer known for her roles in film and television. She gained widespread recognition for her portrayal of Princess Jasmine in Disney\'s live-action adaptation of "Aladdin." Scott\'s performance earned her critical acclaim and showcased her singing talent. She has also appeared in other projects like "Power Rangers" and "Charlie\'s Angels." With her talent, beauty, and versatility as an actress, Scott continues to be a rising star in Hollywood, admired for her captivating performances and positive impact on audiences.',
            birthday: { day: 6, month: 5 }
        },
        { 
            name: 'Iswarya Menon', 
            image: 'https://www.ritzmagazine.in/wp-content/uploads/2022/11/Iswarya-Menon-1.jpg',
            bio: 'Iswarya Menon is an Indian actress known for her work in Tamil and Telugu cinema. She gained recognition for her performances in films like "Monsoon Mangoes," "Veera," and "Naan Sirithal." Menon\'s talent, charm, and screen presence have earned her a dedicated fan following in the South Indian film industry. She continues to be a promising actress, known for her ability to portray a variety of roles with grace and authenticity.',
            birthday: { day: 8, month: 5 }
        },
        /*
        { 
            name: '', 
            image: '',
            bio: '',
            birthday: { day: 5, month: 5 }
        }, */

        /*
        // Month June
        { 
            name: '', 
            image: '',
            bio: '',
            birthday: { day: 1, month: 6 }
        },
        // Month July
        { 
            name: '', 
            image: '',
            bio: '',
            birthday: { day: 1, month: 7 }
        },
        // Month August
        { 
            name: '', 
            image: '',
            bio: '',
            birthday: { day: 1, month: 8 }
        },
        // Month September
        { 
            name: '', 
            image: '',
            bio: '',
            birthday: { day: 1, month: 9 }
        },
        // Month October
        { 
            name: '', 
            image: '',
            bio: '',
            birthday: { day: 1, month: 10 }
        },
        // Month November
        { 
            name: '', 
            image: '',
            bio: '',
            birthday: { day: 1, month: 11 }
        },
        // Month December
        { 
            name: '', 
            image: '',
            bio: '',
            birthday: { day: 1, month: 12 }
        },
        */
    ];

    function displayCelebrities(selectedDay, selectedMonth) {
        const celebritiesList = document.getElementById('celebrities-list');
        celebritiesList.innerHTML = '';
    
        //Filtering birthday based on the user selected date
        const filteredCelebrities = celebrities.filter(celebrity => {
            return celebrity.birthday.day === selectedDay && celebrity.birthday.month === selectedMonth;
        });
    
        filteredCelebrities.forEach(celebrity => {
            const celebrityItem = document.createElement('div');
            celebrityItem.classList.add('celebrity');
    
            const imageWrapper = document.createElement('div');
            imageWrapper.classList.add('celebrity-image-wrapper');
    
            const image = document.createElement('img');
            image.src = celebrity.image;
            image.alt = celebrity.name;
            image.classList.add('celebrity-image');
            imageWrapper.appendChild(image);
            celebrityItem.appendChild(imageWrapper);
    
            const nameWrapper = document.createElement('div');
            nameWrapper.classList.add('celebrity-name-wrapper');
    
            const name = document.createElement('h2');
            name.textContent = celebrity.name;
            name.classList.add('celebrity-name');
            nameWrapper.appendChild(name);
            celebrityItem.appendChild(nameWrapper);
    
            const bioWrapper = document.createElement('div');
            bioWrapper.classList.add('celebrity-bio-wrapper');

            const bioStructure = document.createElement('div');
            bioStructure.classList.add("bio-structure");

            bioWrapper.append(bioStructure);
    
            const bio = document.createElement('p');
            bio.textContent = celebrity.bio;
            bio.classList.add('celebrity-bio');
            bioStructure.appendChild(bio);
            celebrityItem.appendChild(bioWrapper);

            celebritiesList.appendChild(celebrityItem);
        });
    }
    
    const urlParams = new URLSearchParams(window.location.search);
    const selectedDay = parseInt(urlParams.get('day'));
    const selectedMonth = parseInt(urlParams.get('month'));

    displayCelebrities(selectedDay, selectedMonth);
});
