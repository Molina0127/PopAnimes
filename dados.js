let animes = [
    {
        titulo: "Naruto",
        descricao: "Naruto Uzumaki, um jovem ninja da Vila da Folha, é o protagonista de uma das séries de anime mais populares do mundo. Órfão desde pequeno e portador da Nove Caudas, um poderoso demônio-raposa, Naruto enfrenta diversos desafios em busca de reconhecimento e do seu sonho de se tornar Hokage, o líder da vila.",
        links: "https://www.netflix.com/br/title/70205012"
    },
    {
        titulo: "Sword Art Online",
        descricao: "Kirito é aprisionado em um jogo de realidade virtual mortal chamado Sword Art Online. Junto com outros jogadores, ele precisa encontrar uma maneira de escapar desse mundo virtual antes que seja tarde demais.",
        links: "https://www.crunchyroll.com/pt-br/sword-art-online"
    },
    {
        titulo: "One Piece",
        descricao: "Luffy, um jovem pirata com o sonho de se tornar o Rei dos Piratas, embarca em uma grande aventura em busca do tesouro mais procurado do mundo, o One Piece.",
        links: "https://www.crunchyroll.com/pt-br/one-piece"
    },
    { 
        titulo: "Attack on Titan", 
        descricao: "A humanidade vive dentro de cidades cercadas por muralhas para se proteger de Titãs, criaturas gigantescas que devoram humanos. A história acompanha Eren Yeager, que jura exterminar os Titãs após presenciar a destruição de sua cidade natal e a morte de sua mãe.",
        links: "https://www.crunchyroll.com/pt-br/attack-on-titan"
    },
    {
        titulo: "Death Note",
        descricao: "Light Yagami, um estudante genial, encontra um caderno sobrenatural chamado Death Note. O caderno concede o poder de matar qualquer pessoa cujo nome seja escrito nele. Light decide usar o Death Note para livrar o mundo do mal, tornando-se uma figura controversa conhecida como Kira.",
        links: "https://www.netflix.com/br/title/70204970"
    },
    {
        titulo: "Fullmetal Alchemist: Brotherhood",
        descricao: "Dois irmãos, Edward e Alphonse Elric, tentam trazer sua mãe de volta à vida usando alquimia, mas acabam pagando um preço terrível. Edward perde sua perna e Alphonse perde seu corpo inteiro. A história acompanha a jornada dos irmãos em busca da Pedra Filosofal para recuperar seus corpos.",
        links: "https://www.netflix.com/br/title/70204977"
    },
    {
        titulo: "My Hero Academia",
        descricao: "Em um mundo onde a maioria das pessoas possui superpoderes chamados Quirks, Izuku Midoriya sonha em se tornar o maior herói de todos, apesar de ter nascido sem nenhum poder. Sua vida muda quando ele conhece All Might, o maior herói do mundo, que vê potencial em Izuku e decide treiná-lo.",
        links: "https://www.crunchyroll.com/pt-br/my-hero-academia"
    },
    {
        titulo: "Demon Slayer: Kimetsu no Yaiba",
        descricao: "Tanjiro Kamado tem sua vida virada de cabeça para baixo quando sua família é atacada por demônios. Sua irmã Nezuko é a única sobrevivente, mas ela se transforma em um demônio. Determinado a encontrar uma cura para Nezuko e vingar sua família, Tanjiro se torna um caçador de demônios.",
        links: "https://www.crunchyroll.com/pt-br/demon-slayer-kimetsu-no-yaiba"
    },
    {
        titulo: "Hunter x Hunter",
        descricao: "Gon Freecss, um garoto de 12 anos, descobre que seu pai, que ele pensava estar morto, é na verdade um Hunter - um caçador de tesouros, animais exóticos e até mesmo de pessoas. Gon decide se tornar um Hunter para encontrar seu pai e embarca em uma jornada cheia de perigos e desafios.",
        links: "https://www.crunchyroll.com/pt-br/hunter-x-hunter"
    },
    {
        titulo: "Code Geass: Lelouch of the Rebellion",
        descricao: "Em um futuro alternativo, o Império Britanniano conquistou o Japão e o renomeou como Área 11. Lelouch Lamperouge, um estudante britânico, recebe o poder do Geass, que lhe permite dar ordens inquestionáveis a qualquer pessoa. Ele decide usar esse poder para liderar uma rebelião contra o Império Britanniano.",
        links: "https://www.netflix.com/br/title/70159171"
    },
    {
        titulo: "Steins;Gate",
        descricao: "Um grupo de amigos descobre acidentalmente uma maneira de viajar no tempo usando um forno de micro-ondas. Eles logo percebem que suas ações no passado podem ter consequências desastrosas no presente.",
        links: "https://www.funimation.com/shows/steinsgate/"
    },
    {
        titulo: "Cowboy Bebop",
        descricao: "Em um futuro distante, onde a humanidade colonizou o sistema solar, um grupo de caçadores de recompensas viaja pela galáxia em busca de criminosos. A história acompanha Spike Spiegel, Jet Black, Faye Valentine, Edward Wong Hau Pepelu Tivrusky IV e Ein.",
        links: "https://www.netflix.com/br/title/80000468"
    },
    {
        titulo: "Neon Genesis Evangelion",
        descricao: "Em um futuro pós-apocalíptico, a organização NERV recruta adolescentes para pilotar robôs gigantes chamados Evangelions e lutar contra monstros gigantes chamados Anjos. A história acompanha Shinji Ikari, um garoto de 14 anos que é recrutado para pilotar o Evangelion Unidade 01.",
        links: "https://www.netflix.com/br/title/80014416"
    },
    // Adicione mais 20 animes aqui, seguindo o formato acima.
    // Use sites como MyAnimeList, Crunchyroll ou Netflix para encontrar mais animes e informações sobre eles.
    {
        titulo: "Jujutsu Kaisen",
        descricao: "Yuji Itadori, um estudante do ensino médio com habilidades físicas extraordinárias, engole um dedo amaldiçoado e se torna o hospedeiro de Sukuna, um poderoso espírito amaldiçoado. Para controlar Sukuna e proteger a humanidade, Yuji se junta a uma escola de feiticeiros jujutsu.",
        links: "https://www.crunchyroll.com/pt-br/jujutsu-kaisen"
    },
    {
        titulo: "Vinland Saga",
        descricao: "Thorfinn, um jovem viking, busca vingança pela morte de seu pai, um lendário guerreiro. Sua busca o leva para o coração da guerra entre a Dinamarca e a Inglaterra no século XI.",
        links: "https://www.amazon.com/Vinland-Saga-Season-1/dp/B082WTR35S"
    },
    {
        titulo: "The Promised Neverland",
        descricao: "Emma, Norman e Ray vivem felizes em um orfanato, mas descobrem um terrível segredo sobre seu lar e o mundo exterior. Eles devem usar toda a sua inteligência e coragem para escapar e lutar por sua liberdade.",
        links: "https://www.netflix.com/br/title/81006538"
    },
    {
        titulo: "Haikyuu!!",
        descricao: "Shoyo Hinata, um baixinho apaixonado por vôlei, se junta ao time de sua escola com o sonho de se tornar um jogador de destaque. A história acompanha sua jornada de crescimento e os desafios que ele enfrenta ao lado de seus companheiros de equipe.",
        links: "https://www.crunchyroll.com/pt-br/haikyuu"
    },
    {
        titulo: "Re:Zero - Starting Life in Another World",
        descricao: "Subaru Natsuki, um adolescente comum, é transportado para outro mundo e descobre que tem o poder de voltar no tempo ao morrer. Ele usa esse poder para tentar salvar seus amigos e mudar seu destino.",
        links: "https://www.crunchyroll.com/pt-br/rezero-starting-life-in-another-world"
    },
    {
        titulo: "Dr. Stone",
        descricao: "Após um misterioso fenômeno transformar toda a humanidade em pedra, Senku Ishigami, um gênio da ciência, desperta milhares de anos depois. Ele decide usar a ciência para reconstruir a civilização do zero.",
        links: "https://www.crunchyroll.com/pt-br/dr-stone"
    },
    {
        titulo: "That Time I Got Reincarnated as a Slime",
        descricao: "Satoru Mikami, um assalariado comum, é morto e reencarnado em outro mundo como um slime. Apesar de sua nova forma, ele possui habilidades únicas que o ajudam a sobreviver e prosperar neste novo mundo.",
        links: "https://www.crunchyroll.com/pt-br/that-time-i-got-reincarnated-as-a-slime"
    },
    {
        titulo: "Mob Psycho 100",
        descricao: "Shigeo Kageyama, também conhecido como Mob, é um estudante do ensino médio com poderes psíquicos imensos. Ele tenta controlar seus poderes e viver uma vida normal, mas seus problemas pessoais e a influência de outros espers ameaçam sua paz.",
        links: "https://www.crunchyroll.com/pt-br/mob-psycho-100"
    },
    {
        titulo: "Made in Abyss",
        descricao: "Riko, uma órfã que vive em uma cidade construída ao redor de um enorme abismo, sonha em se tornar uma Cave Raider, explorando as profundezas do Abismo. Sua vida muda quando ela encontra um robô com aparência de menino humano chamado Reg.",
        links: "https://www.hidive.com/tv/made-in-abyss"
    },
    {
        titulo: "Violet Evergarden",
        descricao: "Violet Evergarden, uma ex-soldada, busca encontrar seu propósito na vida após a guerra. Ela se torna uma Autômata de Automemórias, escrevendo cartas para pessoas que não conseguem expressar seus próprios sentimentos.",
        links: "https://www.netflix.com/br/title/80184067"
    },
    {
        titulo: "Your Lie in April",
        descricao: "Kousei Arima, um prodígio do piano, perde a capacidade de ouvir seu próprio tocar após um trauma. Sua vida muda quando ele conhece Kaori Miyazono, uma violinista de espírito livre que o ajuda a redescobrir a alegria da música.",
        links: "https://www.netflix.com/br/title/80097392"
    },
    {
        titulo: "A Silent Voice",
        descricao: "Shoya Ishida, um ex-valentão, tenta se redimir pelo bullying que infligiu a Shoko Nishimiya, uma colega de classe surda. A história aborda temas como bullying, redenção e a importância da comunicação.",
        links: "https://www.netflix.com/br/title/80198899"
    },
    {
        titulo: "Your Name.",
        descricao: "Mitsuha Miyamizu, uma garota do interior, e Taki Tachibana, um garoto de Tóquio, começam a trocar de corpos misteriosamente. Eles devem aprender a lidar com a vida um do outro e desvendar o mistério por trás dessa conexão.",
        links: "https://www.funimation.com/films/your-name/"
    },
    {
        titulo: "Weathering with You",
        descricao: "Hodaka Morishima, um garoto que foge de casa para Tóquio, conhece Hina Amano, uma garota que pode controlar o clima. Eles tentam usar o poder de Hina para ganhar dinheiro, mas logo percebem que suas ações têm consequências para o mundo.",
        links: "https://www.funimation.com/films/weathering-with-you/"
    },
    {
        titulo: "The Garden of Words",
        descricao: "Takao Akizuki, um estudante que sonha em ser sapateiro, e Yukari Yukino, uma mulher misteriosa, se encontram em um jardim em dias chuvosos. Eles formam um laço único enquanto compartilham seus sonhos e medos.",
        links: "https://www.funimation.com/films/the-garden-of-words/"
    },
    {
        titulo: "Children Who Chase Lost Voices",
        descricao: "Asuna Watase, uma garota solitária, encontra consolo em um cristal misterioso que recebe transmissões de rádio de outro mundo. Ela embarca em uma jornada para encontrar a fonte do sinal e descobrir a verdade sobre seu passado.",
        links: "https://www.funimation.com/films/children-who-chase-lost-voices/"
    },
    {
        titulo: "5 Centimeters Per Second",
        descricao: "A história acompanha o relacionamento de Takaki Toono e Akari Shinohara ao longo dos anos, desde a infância até a idade adulta. O filme explora temas como distância, amor não correspondido e a passagem do tempo.",
        links: "https://www.funimation.com/films/5-centimeters-per-second/"
    },
    {
        titulo: "Wolf Children",
        descricao: "Hana, uma estudante universitária, se apaixona por um homem-lobo e tem dois filhos com ele. Após a morte de seu amado, Hana precisa criar seus filhos meio-lobo sozinha, protegendo-os do mundo exterior.",
        links: "https://www.funimation.com/films/wolf-children/"
    },
    {
        titulo: "The Girl Who Leapt Through Time",
        descricao: "Makoto Konno, uma estudante do ensino médio, descobre que pode voltar no tempo. Ela usa esse poder para consertar seus próprios erros, mas logo percebe que suas ações têm consequências imprevistas.",
        links: "https://www.funimation.com/films/the-girl-who-leapt-through-time/"
    }
];