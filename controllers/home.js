

exports.home = async (req,res , next ) => {

    console.log('dfdfd');
    
    
    return res.render('home')

    

}

exports.participer = async (req,res , next ) => {
    
    return res.render('participer')

    

}

exports.parrainer = async (req,res , next ) => {
    
    return res.render('parrainer')

    

}

exports.questionner = async (req,res , next ) => {
    
    return res.render('questionner')

    

}

exports.donate = async (req,res , next ) => {
    
    return res.render('donate')

    

}


exports.inviter = async (req,res , next ) => {
    
    return res.render('inviter')

    

}

exports.partagez = async (req,res , next ) => {
    
    return res.render('partagez')

    

}

exports.pouye = async (req,res , next ) => {
    
    return res.render('pouye')

    

}


exports.about = async (req,res , next ) => {
    
    return res.render('about')

    

}
exports.mouvement = async (req,res , next ) => {
    
    return res.render('mouvement')

    

}
exports.vision = async (req,res , next ) => {
    
    return res.render('vision')
    
}
exports.programme = async (req,res , next ) => {
    
    return res.render('programme')
    
}
exports.actualites = async (req,res , next ) => {
    
    return res.render('actualites')
}

exports.actualiteOne = async (req,res , next ) => {
    
    let{id} = req.params; 

    console.log('id =>' ,id);

    if (id == 1) {
        title = "L’incendie à l’hôpital Mame Abdoul Aziz SY Dabakh : « une tragédie de trop » révélatrice de la carence du système de santé public sénégalais.  L’urgence d’une commission d’enquête indépendante pour retracer les responsabilités ";
        img ="assets/img/dabakh.webp";
        body = "Trop c’est trop. Nous ne pouvons continuer de nous indigner face à une succession de tragédies inacceptables et intolérables sans agir. La vie des sénégalais d’abord!  Une fois de plus, le Sénégal est endeuillé et meurtri par l’inacceptable drame qui vient de coûter la vie à plus d’une dizaine de bébés morts dans des conditions atroces et intolérables à l’hôpital Mame Abdoul Aziz SY Dabakh de Tivaouane. Depuis plus d’un an, nous assistons à une succession de pertes humaines inadmissibles dans nos hôpitaux qui révèlent incontestablement des carences de notre système de santé dans sa globalité.  Le Sénégal est malade de son système de santé.  La santé des sénégalais ne doit souffrir d’aucune économie. La vie des sénégalais, qui plus est, la vie de nos enfants, doit être une priorité absolue non négociable. Nous ne pouvons accepter cette série macabre sans pointer les responsabilités afin de prendre toutes les mesures nécessaires pour enrayer ces accidents évitables.  Il est temps de faire un audit du système de santé par une commission d’enquête indépendante pour déterminer les niveaux de responsabilité. Plus jamais ça ! La vie des sénégalais compte tout autant que celle des autres. Nous avons besoin de faire un véritable état des lieux de notre système de santé qui concerne aussi bien l’état du matériel, sa gestion, les contrats de maintenance que la situation de nos ressources humaines.  Le Sénégal meurtri, le Sénégal endeuillé, le Sénégal désemparé, le Sénégal indigné qui met la santé au centre de ses préoccupations a besoin de savoir et comprendre pour ne plus vivre une pareille situation. Alors oui à une commission d’enquête indépendante et transparente pour situer les niveaux de responsabilité et prendre les mesures adéquates.";
        tabArticles = [
         {
            title :"ÉLECTIONS LÉGISLATIVES – 31 JUILLET 2022 Le parrainage, un choix (anti)démocratique ou le RDV manqué des deux principales coalitions",
            img : "assets/img/legislative.jpeg",
            id : 2
         }  ,
         {
            title : "L’appel à la responsabilisation des leaders politiques et au devoir d’exemplarité : La guerre des images. Et le Sénégal dans tout ça ?",
            img : "assets/img/pouye13.jpeg",
            id : 3
         } 
        ];
    } else if(id==2){
        title = "ÉLECTIONS LÉGISLATIVES – 31 JUILLET 2022 Le parrainage, un choix (anti)démocratique ou le RDV manqué des deux principales coalitions";
        img ="assets/img/legislative.jpeg";
        body = "Cet appel ne se veut ni partisan, ni un appel adressé aux autorités du pays. C’est un appel à un consensus responsable dans le but de renforcer la crédibilité de nos institutions républicaines, garantie de la stabilité politique de notre pays. En effet, l’instabilité politique est un obstacle au développement économique de notre pays. Le parrainage, tel qu’il a été pratiqué au Sénégal, bafoue les trois principes de tout texte juridique à savoir leur clarté, leur simplicité et leur précision. Le jeu de ping pong entre d’une part le conseil des sages et la direction des élections et d’autre part entre BBY et YAW, les deux principales coalitions en est une parfaite illustration. L’acceptation ou non des listes nationales sans suppléants ou sans titulaires relève d’une diversion aux antipodes des préoccupations des sénégalais tout en livrant une piteuse image des hommes politiques sénégalais. Le débat sur la neutralité ou non du conseil des sages est soit d’une naïveté déconcertante des hommes politiques ou relève d’un populisme assumé. En effet, qui peut penser à l’existence d’une opposition entre le droit et la politique ? Les décisions du conseil des sages sont éminemment politiques et sont aussi le fruit de l’expression d’une part de leurs propres volontés et d’autre part de la volonté de ceux qui les ont choisis. Quand en un moment donné, la loi n’est plus l’expression du caractère d’une nation et qu’elle donne le sentiment d’un tripatouillage, il faut la remettre en cause et l’abandonner. Nous avons besoin de députés, représentants du peuple et capables de légiférer dans l’intérêt du peuple et non de telle ou telle personnalité. Et c’est pourquoi, la volonté implicite ou explicite visant à éliminer des listes par le simple jeu d’écritures est antidémocratique et n’honore pas notre pays. Le Sénégal est une grande nation et le caractère démocratique de notre pays n’est le fait d’aucun homme politique. C’est le fruit de notre ADN. C’est notre histoire, c’est notre Sénégal, pays du dialogue et de la Téranga. Alors oui il faut prendre le courage d’annuler les parrainages, remettre les compteurs à zéro et reporter les élections pour permettre à tous ceux qui veulent participer aux élections d’y prendre part dans l’intérêt du pays. Il y a la loi et l’esprit de la loi ; il y a le discours sur le droit et le discours du droit. Ensemble, en toute sérénité, posons les conditions, sans effusion de sang, pour une annulation du système des parrainages et pour un report des élections législatives dans l’intérêt du Sénégal et uniquement du Sénégal au-delà des positions partisanes.";
        tabArticles = [
            {
                title : "L’incendie à l’hôpital Mame Abdoul Aziz SY Dabakh : « une tragédie de trop » révélatrice de la carence du système de santé public sénégalais.  L’urgence d’une commission d’enquête indépendante pour retracer les responsabilités ",
                img :"assets/img/dabakh.webp",
                id : 1
             }  ,
             {
                title : "L’appel à la responsabilisation des leaders politiques et au devoir d’exemplarité : La guerre des images. Et le Sénégal dans tout ça ?",
                img : "assets/img/pouye13.jpeg",
                id:3
             } 
        ];
    }else if(id==4)  {
        title = "La corruption et la mal-gouvernance ne sont ni une fatalité ni une spécificité africaine.";
        img ="assets/img/Marche-de-protestation-du-Cu3sp-Fippu-Jotna.jpeg";
        body = "Le coût de la corruption au Sénégal et de la mal- gouvernance La corruption, au-delà du manque à gagner pour l’individu généré par les pots-de-vin demandés et/ou versées comporte des conséquences sur le plan économique et sur le plan social Le montant global de pots-de-vin payés est estimé à près de 120 milliards de F CFA par an. Sur le plan social, la corruption peut être appréhendée par ce que les toucouleurs appellent « Neddo ko Bandam », qui signifie « les parents d’abord ». L’une des conséquences est par exemple le recrutement de personnes, non pas sur la base des compétences, mais du lien familial ou de la proximité avec la personne. Au-delà de son effet en tant que briseur de cohésion sociale, cette forme de corruption empêche de mettre les personnes qu’il faut à la place qu’il faut.  La corruption, sur le plan social, c’est aussi des fonds qui auraient pu être utilisés pour financer des secteurs stratégiques comme la santé et l’éducation. La corruption, sur le plan social, c’est aussi cette incitation à nous maintenir dans une sorte de fatalisme visant à nous faire oublier les vraies valeurs africaines qui mettaient et qui mettent au centre l’humain. Il s’agit d’exiger une égalité d’accès des citoyens aux différents services de l’État. Nous devons et nous pouvons privilégier la capacité et le mérite en mettant fin au clientélisme, à l’utilisation de nos positions à des fins privées.  Nous pouvons y arriver en changeant de comportement, en étant force de proposition et en communiquant autant que faire se peut avec tous les acteurs, dans toutes les langues, pour montrer que le refus de la corruption et de la mal-gouvernance est un facteur de développement. À l’heure du digital, nous vous invitons à mener des actions concertées, des témoignages, à être des lanceurs d’alertes et à adopter un badge de bonnes pratiques et de rejet de toute forme de corruption. Pour qu’il y ait des corrompus il faut des corrupteurs passifs ou actifs. Ne plus rien laisser passer, tel est notre crédo. Ensemble, il s’agit de participer à la création d’un environnement des affaires favorable à l’éclosion et au développement pérenne de l’initiative privée en étant force de proposition afin que les bonnes pratiques et la bonne gouvernance redeviennent nos standards. Ensemble, il s’agit de remettre au centre le RESPECT DU CITOYEN SÉNÉGALAIS ;  OUI À UNE INITIATIVE CITOYENNE POUR UNE ADMINISTRATION NOUVELLE. C’EST AUJOURD’HUI, C’EST MAINTENANT ";
        tabArticles = [
            {
                title : "L’incendie à l’hôpital Mame Abdoul Aziz SY Dabakh : « une tragédie de trop » révélatrice de la carence du système de santé public sénégalais.  L’urgence d’une commission d’enquête indépendante pour retracer les responsabilités ",
                img :"assets/img/dabakh.webp",
                id : 1
             }  ,
             {
                title : "L’appel à la responsabilisation des leaders politiques et au devoir d’exemplarité : La guerre des images. Et le Sénégal dans tout ça ?",
                img : "assets/img/pouye13.jpeg",
                id:3
             } 
        ];
    }else if(id==5)  {
        title = "On ne gagne pas une guerre avec les soldats des autres .";
        img ="assets/img/post5-1.jpeg";
        body = `On ne gagne pas une guerre avec les soldats des autres. C’est d’abord aux investisseurs et entrepreneurs africains de construire la réputation financière africaine. Et c’est aux États africains de mettre en place des mesures concrètes permettant d’accompagner de façon efficiente cette participation des acteurs financiers africains. Des paroles et des actes, voilà ce dont nous avons besoin pour assoir notre réputation financière. La mise en place de la ZLEC (Zone de Libre-Échange continentale) dont l’accord a été signé le 21 mars 2018 par 44 pays africains (soit une zone estimée à 3000 milliards de dollars de production et 1,2 milliard d’individus) à Kigali devra permettre, à travers la mise en place d’une véritable stratégie intracommunautaire et inclusive de développement industriel, l’émergence d’entreprises locomotrices capables de faire face à la concurrence internationale. Le processus est enclenché. Ce défi réalisable devra s’accompagner de la consolidation de la réputation financière des places africaines, condition du renforcement de la reconnaissance de l’expertise financière africaine. Le renforcement des flux physiques intra zone devra s’accompagner aussi, toutes choses égales par ailleurs, d’une augmentation des flux financiers et donc in fine d’une accélération et d’une amélioration quantitative et qualitative des investissements directs étrangers intracommunautaires. Il s’agit de s’appuyer sur le secteur privé dans une démarche de PPP incluant d’une part l’accompagnement des États africains (surtout en termes d’apport de garantie dont a besoin le secteur privé notamment à travers les IFD1) une participation conséquente du privé notamment dans les projets d’infrastructure et se doter en même temps de places financières et donc d’investisseurs institutionnels de proximité capables d’accompagner financièrement et de manière efficiente le mouvement. L’existence de places financières africaines est une condition sine qua non d’une réelle indépendance économique et d’un indispensable contrôle de notre politique économique. Et parmi les déterminants d’une place financière figure la réputation. Il faut donc amorcer la déconstruction2 de la réputation financière de l’Afrique. Il faut déconstruire l’image actuelle de l’Afrique et s’appuyer sur les réussites financières pour conforter l’image d’une expertise financière africaine en construction. Après un périmétrage d’une notion polysémique, nous commencerons par décrire l’image actuelle à déconstruire avant de finir sur les éléments qui nous semblent important de développer pour affirmer l’image l’expertise financière de l’Afrique. Déconstruire pour reconstruire, déconstruire et reconstruire. Il s’agit d’Affirmer et de Montrer l’Expertise Africaine comme Vecteur de la Réputation des Places Financières Africaines : l’enjeu est de taille. La réputation : un concept polysémique.Le rôle de la réputation dans la formation de la crédibilité d’une place financière est incontestable. En effet, comme l’atteste notamment son intégration dans les critères de classement des places financières par GFCI3, la réputation est une variable à prendre en compte pour toute place financière désireuse d’élaborer une stratégie de positionnement au niveau international.Mais avant d’en analyser son impact et l’urgence pour l’Afrique de sa déconstruction dans l’optique du renforcement de sa crédibilité, il convient tout d’abord de définir les contours d’une notion polysémique difficilement périmétrable. Dans les sciences de gestion, la réputation est vue comme une ressource intangible ayant un impact significatif sur la performance.Si au niveau académique, il n’existe pas de consensus sur la définition de cette notion, on peut néanmoins partir de la définition de Fombrun (1996) pour mettre l’accent sur les éléments qui nous serviront de fil conducteur dans notre développement. En effet, ce dernier définit la réputation comme « A perceptual representation of a company’s past actions and future prospects that describes the firm’s overall appeal to all of its key constituents when compared with other leading rivals ».Cette définition appelle les remarques suivantes : d’une part, la réputation est le fruit d’une perception ; d’autre part, dans sa dimension d’identité sociale, la réputation est le résultat de la somme des perceptions de tous les stakholders ; et c’est enfin un critère de classement. Quel que soit l’angle choisi, il existe un consensus sur l’existence d’une corrélation positive entre réputation et crédibilité.L’image de l’Afrique et son impact dans la réputation des places financières africaines.La réputation de l’Afrique et de ses places financières sont indissociables. Cette réputation doit être appréhendée tant sur le plan global que sur le plan individuel. Et incontestablement, en ce qui concerne cette dimension, l’Afrique accuse un retard très important. En effet, l’importance de la communication a été considérablement négligée. Aussi bien à l’intérieur qu’à l’extérieur, les termes qualifiant la réputation de l’Afrique ont toujours été et demeurent encore peu flatteurs.– Concernant la question de la perception, aujourd’hui les acteurs qui font et défont l’image sont majoritairement situés dans les places financières européennes et méconnaissent volontairement (ce qui conforte la position dominante des places financières occidentales et les avantages qui vont avec) ou involontairement (ce qui nécessite un travail de communication pour expliquer l’expertise financière africaine) de l’Afrique. Qu’en-est-il de cette image ?
        
        Concernant la dimension collective, nous avons d’une part les médias occidentaux habitués au « sensationnalisme » et toujours prêts à mettre l’accent sur les faits divers qui sont là pour faire diversion en occultant les avancées africaines en matière d’ingénierie financière et d’autre part, les africains qui renforcent cette image en investissant systématiquement en occident, aidés, il faut le dire par l’absence de mesures de protection des investisseurs au sein de nos États.
        
        Les articles des journaux précédant les modifications positives de la position des places financières africaines dans les classements opérés par les différents services de notation (notamment le GFCI) de l’attractivité des places financières mettent l’accent sur « l’exploit » réalisé par ces dernières. Comme si à travers cette « surmédiatisation », on voulait montrer le caractère « anormal » de la nouvelle position prise par telle ou telle place financière africaine. C’est donc une façon implicite de dire qu’il y a la « cour des grands qui, de temps en temps accepte quelques brebis égarées ». C’est toute l’importance des mots et de leur impact dans le conscient et le subconscient.
        
        La combinaison de cet ensemble permet de dire qu’aujourd’hui l’Afrique est perçue comme un continent « sous-développé » (ou en voie de développement ou encore en développement) comparativement aux pays dits développés.
        Cette perception est renforcée par le matraquage médiatique dans lequel les expressions associées à l’Afrique sont systématiquement « mauvaise gestion », « manque de maturité », «manque d’expertise».
        
        Du coup, les différentes institutions financières africaines ont toujours été considérées comme devant être « accompagnées, aidées, soutenues » par des « experts internationaux » qui savaient mieux qu’elles ce dont elles « souffraient ». De ce fait, les organisations financières africaines privées comme les institutions de régulations peinent à s’imposer au niveau international comme des structures crédibles.
        La mise en place de places financières attractives passera donc par la “dé“construction de la réputation de l’Afrique : déconstruire et reconstruire car la réputation est un construit social individuel et collectif qui met en jeu d’une part la perception que les africains ont de leur continent et d’autre part l’image que l’Afrique renvoie au monde.
        
        Le premier point peut être résumé en une phrase lapidaire : « les africains croient en l’Afrique, aiment l’Afrique mais… ne lui font pas confiance ». Concernant le deuxième aspect, l’image de l’Afrique est relatée en des termes peu élogieux. Sur le plan managérial, l’Afrique est décrite comme un continent caractérisé par une mauvaise gestion et une instabilité économique, sociale et juridique. Cette image, distillée depuis des décennies, crée, à l’extérieur, des perceptions cognitives et émotionnelles négatives sur l’Afrique.
        
        Une réputation financière à construire via un encrage africain levier d’une ouverture gagnante.
        
        La réputation financière africaine est en construction et en bonne voie. Il s’agit d’une part de mettre l’accent sur les succès actuels et d’autre part de mettre en place les conditions de son renforcement.
        • Dans un premier temps, il faut s’appuyer sur l’émergence de véritables hubs financiers aujourd’hui en Afrique. Incontestablement on assiste au renforcement de la réputation de certaines places considérées de plus en plus comme de véritables hubs financiers. Dans le classement 2017 des 96 places financières les plus compétitives de GFCI on retrouve la City de Casablanca, première place financière africaine à la 32ème place devant Johannesburg, 52ème et Maurice 56ème. Ce qui permet à Said Ibrahimi, directeur général de Casablanca Finance City Authority (CFCA), de considérer l’intégration de CFCA dans le top 40 du classement mondial des places financières incontestablement comme un facteur d’amélioration de la réputation de la place financière marocaine et un renforcement de sa crédibilité de place financière mondiale.
        
        Aussi et de façon stratégique et concertée, il faut consolider certaines places financières et en faire des hubs capables de rivaliser avec les plus grandes places financières internationales. Il s’agit par exemple pour l’Afrique de l’Ouest du Nigéria et du Maroc, l’Afrique du Sud pour la région Australe et enfin le Kenya pour la zone Est de l’Afrique. Et dans un deuxième temps, choisir un pays cible dans chaque zone de façon à en faire un spoke et obtenir ainsi un maillage financier efficient et capable de soutenir la croissance africaine.
        
        • Un autre moyen pour renforcer la réputation réside dans le développement du commerce intracommunautaire. Pour enfoncer des portes ouvertes, il est utile de rappeler cette évidence : « on ne gagne pas une guerre avec les soldats des autres ». Plusieurs pistes pour favoriser le renforcement de notre enracinement économique et financier local pour mieux affronter la concurrence internationale. Aujourd’hui les flux de capitaux qui viennent soutenir une croissance économique africaine parmi les plus élevés attestent des bonnes perspectives de développement. Globalement les mesures mises en place dans certains États africains favorisent un allègement du poids de la contrainte étrangère dans l’endettement de nos nations. L’exemple du Maroc mérite d’être souligné. En effet, depuis une vingtaine d’années, le Maroc a opté pour le renforcement de la part domestique de sa dette au détriment de la part accordée à l’étranger. Du coup cette nouvelle donne dessert l’étau que représente le poids des investisseurs étrangers dans les orientations économiques du Royaume. Un exemple à benchmarker.
        
        • La première urgence pour renforcer la réputation des places financières africaines est donc de consacrer l’essentiel de nos efforts dans la mise en place de mesures visant à attirer et conserver durablement les investisseurs africains de l’intérieur et de la diaspora. Comment ? Il faut mettre en place un véritable cluster financier à destination des entreprises africaines et renforcer le droit des investisseurs africains par des mesures fiscales attractives et une plus grande protection de leur investissement et pourquoi pas, sauvegarder l’anonymat qui n’est pas forcément synonyme de blanchiment. Les réformes de nos institutions doivent aller dans ce sens.
        
        • Les années 2000 permettent incontestablement de prouver que l’Afrique est devenue une zone attractive et crédible pour les investisseurs. En effet, en 2005, l’opération de cession de celtel4 pour près de 3,5 milliards de dollars US marque l’intérêt du capital investissement en Afrique. Depuis, l’augmentation croissante des sommes mobilisées par différents fonds d’investissements dans des opérations de cessions, de participations constitue une preuve que les indicateurs de performances, économiques financières, sociales et sociétales sont en nette progression. Il faut donc non seulement mettre l’accent sur ces succès mais aussi et surtout les accompagner par la mise en place d’une stratégie de vulgarisation à travers des médias financiers capables de relayer les bonnes informations financières.
        
        Pour résumer, il convient de souligner le fait que la réputation est un processus social qui se construit dans un réseau d’échange. La confiance des parties prenantes au rang
        
        desquels il convient d’accorder une place particulière aux investisseurs africains, est un vecteur de renforcement de cette réputation.
        La réputation passera donc par la confiance au système financier africain. Les premiers acteurs locomoteurs de cette confiance sont et seront les africains eux-mêmes.
        
        Conclusion :
        Déconstruction et construire la réputation des places financières africaines est un facteur d’émergence et de densification de fonds d’investissements africains indispensable à l’accompagnement de la croissance africaine et permet d’attirer durablement les investisseurs africains (de l’intérieur comme de l’extérieur) et étrangers. Fruit d’une perception interne et externe de l’Afrique et de la qualité de son expertise, la réputation des places financières africaines est un construit à la fois individuel et collectif. C’est un enjeu de taille et c’est entre les mains des africains.
        
        Dr Daby POUYE.
        Docteur en Sciences de Gestion Spécialité Prospective, Innovation, Stratégie, Organisation.
        
        Les notes
        
        1-Les institutions financières de développement peuvent servir de garantie permettant l’octroi de fonds à des structures africaines porteuses de projets viables mais « méconnus » par le système de financement traditionnel.
        
        2 -Il s’agit de déconstruire l’image actuelle pour construire l’image d’une Afrique financière en marche.
        
        3-The Global Financial Center Index est un indice réalisé par le Think tank Y/Zen de Londres. C’est une référence en matière de classement des places financières mondiales en termes de compétitivité. L’indice prend en compte d’une part les données de l’environnement économique du centre financier, le niveau de développement de son secteur financier, le capital humain disponible, les infrastructures et enfin la réputation et d’autre part, l’avis de 3500 professionnels des services financiers.
        
        4-Celtel est un opérateur de téléphonie mobile créée en 1998 par Mo Ibrahim richissime homme d’affaire soudanais.
        `;
        tabArticles = [
            {
                title : "L’incendie à l’hôpital Mame Abdoul Aziz SY Dabakh : « une tragédie de trop » révélatrice de la carence du système de santé public sénégalais.  L’urgence d’une commission d’enquête indépendante pour retracer les responsabilités ",
                img :"assets/img/dabakh.webp",
                id : 1
             }  ,
             {
                title : "L’appel à la responsabilisation des leaders politiques et au devoir d’exemplarité : La guerre des images. Et le Sénégal dans tout ça ?",
                img : "assets/img/pouye13.jpeg",
                id:3
             } 
        ];
    }
    
    else {
        title = "L’appel à la responsabilisation des leaders politiques et au devoir d’exemplarité : La guerre des images. Et le Sénégal dans tout ça ?";
        img ="assets/img/pouye13.jpeg";
        body = "Quelle image donnons-nous au peuple sénégalais d’ici et d’ailleurs et au monde avec les comportements de certains leaders, hommes politiques et responsables ? Il est grand temps d’adopter une posture exemplaire qui renforce la crédibilité de notre pays et de nos institutions à tous points de vue. Nous sommes tous conscients que le politique est inséparable de l’économie et que nous avons besoin d’édifier une puissance économie mondiale au service de tous les sénégalais. Aussi, nous ne pouvons nous permettre certains comportements qui frisent l’irresponsabilité pour ne pas dire l’irrespect vis-à-vis du peuple sénégalais.  Si on s’en remet à l’histoire, on peut remarquer que le plus souvent, la guerre médiatique a accompagné et précédé les conflits armés. Aujourd’hui, sur le plan politique, deux images se télescopent : celle d’hommes politiques en Afrique marquée par une remise en cause systématique de nos institutions et celle d’un Occident avec des hommes politiques « solidaires » dans la défense de leur modèle institutionnel considéré par ces derniers comme le meilleur modèle. Internet a multiplié dans des proportions incalculables et encore immensurables la surinformation imagée et personnalisée. Or, il n’est point besoin d’aller loin dans l’histoire pour mesurer le poids des images dans bien des domaines. La force de l’image sur les représentations et ses effets sur l’opinion ne sont plus à démontrer. Aujourd’hui, plus que jamais, nous sommes prisonniers de notre propre image et de celle que les autres se font de nous. Aussi, les leaders sénégalais ont, dans ce contexte, un devoir d’exemplarité. Bien entendu, il ne s’agit pas de dédouaner le pouvoir ni de lui donner un blanc-seing.  Les leaders de l’opposition ont accepté le principe du parrainage. Et comme je l’avais déjà souligné, sa mise en place comporte des ratés incontestables qui constituent une manifestation de l’impréparation des autorités. En effet, les différentes coalitions n’ont pas suffisamment expliqué que le parrainage était un devoir citoyen et non une adhésion à un parti, condamnant de fait l’émergence de nouvelles sensibilités. Nous avons accepté le jeu constitué par des règles et un fair-play. Nous avons assisté le 28 avril 2022 à une réunion de la direction générale des élections concernant la constitution et le dépôt des dossiers de déclaration des candidatures animé par Biram SÈNE. Les explications sur le déroulé des élections étaient claires. Le mardi 3 mai, j’ai assisté à une 2ème réunion dans les locaux de la direction des élections animée par Tanor Thiendella FALL. Les explications étaient claires et ce dernier a même soumis à discussion les modalités de dépôt des listes de parrainages. Après âpres discussions, nous sommes tombés tous d’accord de façon démocratique sur les démarches attendues. La question de la parité était aussi abordée de façon très explicite. Aussi, deux positions s’imposent à nous tous : soit nous sommes d’accord sur les règles et nous nous y soumettons ; soit nous sommes en désaccord et nous le disons et nous nous battons démocratiquement pour les changer. Et dans tous les cas, nous ne pouvons nous référer qu’à l’autorité judiciaire. Ni le chef de l’État, ni les leaders de l’opposition que nous sommes, n’ont compétence pour remettre en cause les règles du jeu. En conclusion, arrêtons de nous mentir et surtout de mentir au peuple pour les instrumentaliser et les pousser vers des manifestations violentes avec en sus un risque de perte de vies humaines. La vie des sénégalais compte autant que celle des autres. Il s’agit de nous battre de façon démocratique pour la mise en avant des intérêts des sénégalais tout en participant au renforcement de la crédibilité de nos institutions. Loin des injures, des accusations sans preuves et de l’instrumentalisation du peuple, œuvrons par l’exemple car le véritable leader est celui qui est capable de susciter l’adhésion sans chercher à verser le sang des sénégalais.  J’en appelle au respect des règles et du fair-play qui constituent les deux piliers de tout jeu.";

        tabArticles = [
            {
                title : "L’incendie à l’hôpital Mame Abdoul Aziz SY Dabakh : « une tragédie de trop » révélatrice de la carence du système de santé public sénégalais.  L’urgence d’une commission d’enquête indépendante pour retracer les responsabilités ",
                img :"assets/img/dabakh.webp",
                id : 1
             }  ,
             {
                title :"ÉLECTIONS LÉGISLATIVES – 31 JUILLET 2022 Le parrainage, un choix (anti)démocratique ou le RDV manqué des deux principales coalitions",
                img : "assets/img/legislative.jpeg",
                id :  2
             }
        ];
    }
    

    return res.render('actualiteOne' , {
        title,
        img,
        body,
        tabArticles
    })
}

