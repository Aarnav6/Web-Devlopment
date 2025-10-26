## css - cascading style sheets notes

- psudeo class in css are used to apply effects on a particular state
like hover, active(on click), etc
```css
    body{
        background-color:blue;
    }
    body:hover{
        background-color:red;
    }
    body:active{
        background-color:pink;
    }
```

<br>

- position in css are of 5 by default its set to static
  - relative : changes relateive to itself
  - absolute : relative to its relative to its nearest positioned ancestor which is non static
  - fixed : removes an element from the normal document flow and locks it in place relative to the browser's viewport
  - sticky : hybrid between relative and fixed positioning. The element is treated as position: relative until it hits a specific threshold during scrolling, at which point it "sticks" and behaves like position: fixed.


    

<br>

- we can use the transition which will affect when 
changes into another psuedo class
```css
* {
    transition-property: all;
    transition-duration: 700ms;
    transition-delay: 300ms;
    transition-timing-function: steps(3);
    transition-timing-function: ease-in;
    transition-timing-function: ease-out;
    /* there are other transition also timing-functions as well check out mdn */
}
```

<br>

- we can use the transform to manipulate element
the items inside the will also be affected

```css
* {
    /* can be used to transform elements in 2d space or 3d spaces*/

    transform: scale(2,3); /* to scale 2 in x axis and scale 3 in y axis */
    transform: scaleX(1.2); /* to scale in x axis */
    transform: scaleY(1.2); /* to scale in y axis */

    transform: rotate(180deg); /* 180 degree rotation around it's center point */
    transform: rotateX(180deg); /* 180 degree rotation along the x axis */
    transform: rotateY(180deg); /* 180 degree rotation along the y axis */
    transform: rotateZ(180deg); /* 180 degree rotation along the z axis */

    transform: translate(30px,30px); /* moves towards both axis by 30px */
    transform: translateX(30px); /* moves towards the x axis by 30px */
    transform: translateY(30px); /* moves towards the y axis by 30px */
}

```

- this code to learn about above things but this code is only made for `DESTOP DISPLAYS`
it might show wrong in case of ~MOBILE DISPLAY~
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
    <style>
        body {
        }
        body,div{
            display:flex;
            flex-direction:column;
            justify-content: center;
            align-items: center;
            background-color: antiquewhite;
            margin: 10px;
            padding: 10px;
        }
        div{
            height: 50%;
            width: 50%;
            border:3px solid black;
            transition: all ease-in-out 2000ms;
        }
        #inner{
            background-color: aqua;
            z-index: 15;
            position: relative;
        }
        #inner:active{
            transform: translateX(150px);
        }
        #outer{
            background-color:chartreuse;
        }
        #sticky{
            position: sticky;
            top:0px;
            background-color: aliceblue;
        }
        button {
            position: absolute;
            top: 15%;
            left: 40%;
            z-index: 10;
        }
    </style>
</head>
<body>
    <div id="outer">
        <h2>Find The Button</h2>
        <button>click me</button>
        <div id="inner">
            <h5>You cant find it </h5>
        </div>
    </div>
    <div id="text">
        <h2 id="sticky">IM STICKY</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut alias dolor quo quisquam libero, vel laudantium expedita, provident, ea officia mollitia autem. Minima, culpa aliquid! Magni accusantium deserunt quaerat quam.
            Numquam ducimus aut vero blanditiis facilis. Hic exercitationem nemo in animi et cum velit fuga, nulla amet sunt nisi quidem placeat error minus id dolorem! Quibusdam facere reprehenderit aut eum?
            Reiciendis ipsam perspiciatis ea facilis sequi quo fugiat excepturi voluptatibus nulla. Quisquam ducimus officiis nulla laudantium exercitationem explicabo, ipsa deserunt dolore alias maiores iure libero suscipit in nostrum rerum? Et.
            Reiciendis vitae vero rerum veritatis et architecto temporibus facilis, hic ipsa necessitatibus cupiditate inventore, iste illo modi incidunt eveniet! Veniam amet dolorum inventore, dolore alias quidem esse deserunt eaque eos!
            Asperiores nam laudantium iusto ad excepturi dolorem eligendi nesciunt voluptates error nemo minus id accusantium ut ex, facere quo natus libero aliquid maxime perferendis ducimus distinctio cumque! Eveniet, totam autem?
            Repudiandae laborum voluptas optio libero dolor accusantium sit deserunt harum sunt delectus veritatis, modi aliquam, illo error provident voluptatem voluptates magnam inventore at expedita alias aliquid labore itaque. Porro, animi.
            Exercitationem eos id, ad deleniti recusandae quas voluptatibus sapiente dolore optio corporis veniam ullam esse rem doloribus a provident ex earum dolor? Porro at sit atque nisi odit voluptatem dolore.
            Ullam, tempore voluptates alias laboriosam aperiam quidem, nobis doloremque enim consectetur at dicta repellendus cum molestiae amet laudantium aliquid est quos perspiciatis culpa natus quod dolorem voluptatem sit deleniti! Aliquid!
            Libero eius deserunt id veritatis quaerat ab quasi necessitatibus atque nihil sed illum modi assumenda voluptatum, dolores, accusamus dolor optio, vero adipisci. Deserunt nesciunt ex minus optio molestias omnis deleniti.
            Quae, soluta. Incidunt iusto officiis, nisi officia aut accusamus culpa vitae alias magni facilis? Doloremque praesentium reiciendis nam at hic, fugit tempore, tenetur animi quaerat sunt, minus placeat necessitatibus eius!
            Qui, a consequuntur magnam harum fuga saepe, laudantium recusandae, accusantium aspernatur et tempora. Nisi aperiam beatae illum consequuntur. Qui doloremque sint nam sequi deleniti, temporibus optio exercitationem perspiciatis praesentium dignissimos?
            Quam eum debitis consequatur minus repellendus ipsa dicta fugiat rem ipsam. Laudantium, autem natus beatae ratione inventore, quis neque quisquam, est quo impedit saepe reiciendis quaerat in dolore. Exercitationem, nulla!
            Molestias repellendus earum, cum similique corrupti voluptatibus inventore dolorum at laudantium, expedita, tempora odio fugiat sed distinctio odit atque sunt amet? Placeat doloribus reprehenderit sapiente sed nulla, rem asperiores amet?
            Accusantium nostrum quod pariatur fugit blanditiis? Molestias veniam omnis qui provident fugiat tempora, dolore quis illo esse enim inventore distinctio vero. Dolorum temporibus autem illo distinctio reiciendis sequi possimus dolorem.
            Reiciendis velit id nesciunt obcaecati quas ab accusantium perspiciatis facilis totam! Quidem similique maiores numquam eos ad facilis placeat molestias officia autem at porro aperiam quo eligendi, aliquid, aliquam repudiandae.
            Reiciendis voluptatem saepe dignissimos! In aut laborum quia unde. Totam, odit excepturi odio sit, pariatur numquam ex fuga, voluptates itaque dolore at! Nisi odit temporibus illo totam, mollitia officiis voluptatum.
            Unde reprehenderit quos architecto impedit pariatur dolore, inventore eveniet maxime quas fugit. Impedit, possimus unde, fugiat perspiciatis accusamus necessitatibus, perferendis tenetur et deserunt nulla ipsum tempora labore deleniti velit neque.
            Asperiores libero blanditiis pariatur molestiae dolores hic optio commodi voluptatem? Sequi at molestiae corporis a reprehenderit culpa tempora excepturi, cupiditate asperiores ut autem illum pariatur ipsa iure tenetur illo numquam.
            Asperiores exercitationem perferendis sequi adipisci velit tenetur dolorem vel quibusdam possimus nostrum laborum error provident consequatur amet fuga aut, hic a! Dolores hic voluptas possimus molestiae odit atque aliquam dignissimos.
            Voluptatibus earum ipsa, mollitia veniam cum rem qui cupiditate alias non aspernatur nihil! Voluptatibus, cum doloribus magni praesentium minus nam perspiciatis vero veniam magnam sapiente quidem, quis consectetur blanditiis nesciunt.
            Repellat voluptatem animi officia ullam ipsa placeat qui praesentium voluptates perferendis, rem temporibus hic facilis, in est doloribus numquam quos, necessitatibus quasi? Soluta, cum? In dignissimos nesciunt eius animi maiores?
            Tempore voluptates quibusdam voluptatibus at, quisquam nam eveniet architecto, aliquid id sit ratione molestias quis odio consequatur. Ipsa minus itaque accusamus, dolores aliquam, unde maiores alias esse sequi reprehenderit dolorem!
            Commodi in repudiandae architecto quasi quisquam incidunt similique ea, tempore nulla quo molestiae excepturi ut! Provident totam neque aliquam temporibus aspernatur asperiores eos. Cum saepe quo suscipit illo placeat error!
            Provident nam sit omnis non incidunt laudantium aliquid aspernatur quam deleniti quaerat. Accusamus error dolores quae fuga, impedit aliquam sapiente totam sed tenetur perspiciatis molestiae, nesciunt, neque esse sit corporis.
            Velit quas et repellat nisi omnis explicabo rem veritatis corporis illum, temporibus est id soluta voluptate pariatur debitis, totam tenetur at nemo ipsum, dolores voluptas cum fugiat saepe. Dolores, asperiores!
            Dicta consectetur commodi id cum voluptatem tenetur facilis accusamus dolorem neque animi quibusdam doloribus quae nobis qui excepturi voluptas repellat aperiam soluta, iste porro ullam a saepe perspiciatis! Quisquam, voluptas.
            Itaque vel eaque officia nobis, odit eum velit reprehenderit ipsa quam magnam. Illum iure quod ipsa enim provident porro. Temporibus architecto incidunt suscipit obcaecati adipisci aspernatur consectetur minima porro perspiciatis?
            Vitae error dolores illo doloremque, quasi cupiditate modi eveniet animi laborum ratione aperiam eligendi amet omnis provident quisquam pariatur consectetur perspiciatis ipsam velit? Magni, ipsa cumque vel nesciunt illum doloribus.
            Veniam laborum laudantium adipisci magnam. Ratione vel incidunt, unde voluptas fuga ad iusto explicabo beatae similique, temporibus eveniet optio! Reiciendis qui magni quae dignissimos pariatur. Excepturi, error laboriosam. Laudantium, obcaecati.
            Dolores animi, debitis officia error atque sapiente reprehenderit illum numquam veritatis saepe vel. Ex enim ad eligendi nisi impedit recusandae ea esse eius officiis reprehenderit similique sapiente optio, et maxime.
            In vel, vitae nesciunt quae maiores fugiat maxime aperiam. Molestias facilis perferendis molestiae neque sequi ea veniam distinctio similique recusandae. Voluptatibus maxime et amet eveniet commodi, consectetur esse animi atque!
            Voluptates aspernatur esse fugit ipsa est! Facere, minus eos doloribus reiciendis et porro similique, doloremque rerum quia cupiditate quidem quam assumenda nobis impedit unde numquam voluptates, consequuntur cumque at vitae!
            Dolorem voluptatem veniam distinctio pariatur error vitae quibusdam laudantium numquam harum molestiae quia laboriosam veritatis magni delectus et nesciunt sapiente ea quisquam officiis deleniti dolore nemo, accusantium id maxime. Perspiciatis!
            Perspiciatis nihil pariatur iure, magni itaque cupiditate dolorem labore ipsum dicta illo quam corrupti numquam maiores eaque in, veniam officia fugiat sapiente aperiam? Ea, ab nihil? Fugit similique consequatur quis?
            Optio doloremque eius sit autem unde nihil alias aut id nobis commodi nulla aliquam minima rerum similique sint quas delectus, ipsam quo voluptas. Accusantium dignissimos, aliquid quas natus veniam similique.
            Quisquam, placeat, ullam excepturi beatae fugiat voluptas ut dignissimos hic esse, ab nostrum nisi. Fugiat eveniet architecto fugit magnam minus atque deserunt, maxime, dolorum repudiandae odit, molestias laborum sequi dignissimos.
            Officiis fugit minus aliquam aspernatur vel dolor commodi culpa, tempore cum necessitatibus error obcaecati dolore dolorum aut vero sit adipisci, asperiores, pariatur architecto inventore eum. Tempore atque veritatis qui cum.
            Odio recusandae, id quisquam quas quaerat commodi fugit amet pariatur architecto consequatur eius, incidunt rem vitae beatae assumenda. Dolorem id aliquid excepturi debitis ipsam sequi molestiae alias, illum adipisci officia.
            Nesciunt laudantium pariatur quam debitis dicta necessitatibus suscipit veniam distinctio quo eos quasi ut, iste, delectus eaque optio praesentium mollitia, corrupti officia rerum ea minima neque adipisci. At, suscipit voluptatem?
            Porro impedit dolorem asperiores officiis sed maiores ab totam, quo ex alias! Ullam, repellendus ea molestias, perspiciatis facilis tenetur nemo, impedit quisquam assumenda neque tempora possimus voluptatum sapiente consequuntur placeat.
            Accusantium tenetur unde porro amet repellendus illo nulla? Earum aperiam, optio est assumenda perferendis dolor et ipsum explicabo consequatur deleniti excepturi quam omnis odio totam, quo iusto tenetur temporibus odit.
            Aspernatur repudiandae, non obcaecati vitae eius nesciunt vero perspiciatis et earum deleniti sint illo laudantium, ipsum repellendus itaque commodi dicta! Tempora eos minima suscipit praesentium? Sapiente esse excepturi totam doloremque.
            Dignissimos deserunt nulla fuga, voluptas ipsa totam itaque culpa ut magnam iure, labore qui fugit! Asperiores commodi pariatur veniam facere voluptatibus dignissimos aliquam! Maxime animi, reiciendis exercitationem neque atque blanditiis.
            Incidunt est dolores dolorum corrupti recusandae vitae consequatur ducimus, quibusdam quis cumque deserunt quaerat facilis et sunt commodi minima doloribus ipsam eaque, perspiciatis dolor laborum. Aspernatur facilis excepturi accusamus rerum.
            Sint doloribus commodi natus sunt sequi repellat, maiores pariatur sapiente illo laudantium debitis perspiciatis recusandae eos voluptate! Mollitia libero ab saepe cum, provident voluptatum natus nihil accusamus itaque expedita accusantium.
            Odio eos consequatur ipsa, aliquam nobis officiis perspiciatis pariatur dolorum possimus dolor, officia vero. Quam modi dolor quaerat quasi, dolorem corrupti quo sed similique, non ratione ex. Illum, minima mollitia!
            Maxime facilis quia autem omnis consectetur labore repellat expedita at, vero tenetur nam nisi rem libero natus optio soluta dolorem. Ab, consequuntur. Culpa quo debitis rerum, consequatur dolore corporis quos!
            Reprehenderit inventore blanditiis soluta quaerat, unde sequi ipsum nostrum mollitia praesentium, obcaecati eaque delectus corrupti quidem hic a omnis temporibus reiciendis asperiores incidunt dicta. Obcaecati consectetur sed atque sit doloribus.
            Ex magnam doloremque iusto hic fugit veniam fuga a suscipit esse tempora, odit voluptatum, eos blanditiis quasi veritatis. Ad ullam rem, unde fugit repellat dolorem corporis animi aliquid tempore quibusdam.
            Quae quaerat voluptatibus iste molestias in, ullam, iure a ducimus earum debitis obcaecati consectetur magni consequatur sed animi necessitatibus cum. Maxime perferendis dolorem magnam error commodi omnis quod, provident corporis.
            Blanditiis, pariatur incidunt. Cumque mollitia maxime eveniet fuga quidem ducimus natus delectus, ab a qui sed suscipit repellat animi omnis recusandae quos illum, laboriosam corporis. Corporis aliquam ullam ratione delectus?
            Quasi, amet magni officiis, sapiente esse ipsa quo quisquam corporis recusandae, enim nisi sunt autem. Illo aliquid iure earum repudiandae suscipit officiis tenetur, ipsum nulla hic sequi aspernatur, quis tempore.
            Ut tempore minima quae et autem numquam sint, quas ducimus modi obcaecati minus suscipit ipsum itaque nihil error doloremque asperiores. Ut commodi, obcaecati tempora id numquam esse molestias eos? Debitis.
            Saepe sint voluptas vitae nisi non? Laboriosam impedit architecto totam dolor recusandae fuga asperiores earum. Assumenda, facilis. Ullam repellendus modi corrupti cumque aperiam labore consequuntur ex cum, consequatur, magnam magni.
            Aliquid voluptas ut quis asperiores officiis, placeat nemo voluptatum aspernatur dolor molestiae. Voluptatibus repudiandae eum soluta? Architecto reprehenderit quos cum tempora ipsa voluptas deleniti a sint, odio sapiente aliquam ipsum.
            Perspiciatis numquam ipsum, quasi similique molestias ipsa, aut, sit eligendi saepe voluptate qui dicta. Expedita quaerat velit ipsum impedit porro. Dolor praesentium similique atque quae pariatur fuga repellendus mollitia alias.
            Consequuntur eligendi harum autem soluta nemo quo perferendis tenetur quos voluptatibus, illo quas in tempore eos aspernatur sed dolores culpa minus facere omnis adipisci iste numquam sequi quis at! Dignissimos?
            Iusto molestias ratione sapiente maiores eveniet, maxime impedit deleniti mollitia ipsa dignissimos nobis deserunt autem reiciendis incidunt laudantium amet iure fugiat voluptas ea necessitatibus. Nemo placeat at dolor vel natus?
            Magnam error asperiores, mollitia esse totam non vel expedita est blanditiis minima laborum ipsam vitae nostrum iste. Dicta nobis illum iure molestias similique. Ab, excepturi! Natus perferendis perspiciatis vero repellendus?
            Reiciendis, labore debitis dolores fuga eos expedita sed voluptatem nobis. Eligendi sequi atque totam, impedit sit ullam corporis quas iure vel pariatur soluta quaerat ab cupiditate unde, est sed? Aliquid.
            Dolorem voluptatem quibusdam magni incidunt nisi, ab deserunt facilis laudantium error neque repellat impedit, vel corporis praesentium itaque veritatis dolorum quaerat atque. Numquam consequatur odit minus et eum sequi repellendus!
            Sint, odio? Expedita, alias dolorem! Rerum molestias pariatur velit dolor architecto explicabo modi facere beatae vitae exercitationem quia vero, tempore, ut tempora! Iste deleniti blanditiis labore quod provident obcaecati eaque.
            Voluptates non inventore nam harum, quidem omnis, aspernatur repellendus facere animi amet dignissimos? Molestiae, iste. Autem ullam dicta minus fugit tenetur, minima repudiandae non doloribus quibusdam quisquam ex, adipisci exercitationem?
            Necessitatibus modi eveniet vero nemo laboriosam ipsam dolorum possimus nobis fuga, itaque voluptatem ullam in officiis sunt sapiente sit? Atque iure libero excepturi, suscipit eos nostrum necessitatibus illo nemo aperiam.
            Repudiandae facilis repellat animi id accusantium, dolore ipsa nobis earum, sint, ipsam placeat asperiores fuga eveniet expedita dolorem fugit tenetur in suscipit non. Ab, unde magnam. Adipisci porro odit doloribus!
            Fugiat alias deleniti expedita cupiditate ducimus rem asperiores, eum est recusandae officia. Provident necessitatibus praesentium inventore? Repudiandae earum, a distinctio molestias necessitatibus neque similique sint beatae debitis, nihil iste enim.
            Tempora, quaerat vitae ut maxime animi velit corrupti quos laboriosam iste autem ipsa cupiditate tempore qui eos? Totam, error, labore maxime excepturi voluptatem maiores, fugit repellendus tempore at dolorem repudiandae?
            Quis suscipit facilis in, praesentium possimus repellat ea eius dicta voluptatem alias dolores ex, totam magnam rerum vitae a itaque eaque nihil nam. Sint quisquam odio reprehenderit aut laborum repellendus!
            Maiores et, provident, velit maxime recusandae repellat cupiditate non laboriosam sit modi nulla minus quibusdam exercitationem necessitatibus voluptas laborum, placeat architecto nihil assumenda. Mollitia, perspiciatis voluptas? Sint a esse nam.
            Animi, delectus. Molestias voluptate dolores voluptatibus ipsam cumque eveniet, sequi totam nostrum atque porro eaque excepturi in adipisci, distinctio, soluta similique natus voluptatem. Fuga suscipit unde voluptas debitis fugit consequuntur.
            Similique rem, blanditiis commodi tenetur a voluptatum autem vero excepturi corrupti? Quam aut quasi sunt deserunt nisi tenetur atque nihil dolor doloribus dolorem. Unde aliquam nostrum repudiandae delectus at tempore?
            Reprehenderit expedita nesciunt quos vero adipisci repellat est culpa ea minima sed repellendus voluptatem perferendis, nisi dolores ipsa nulla? Non aliquid reprehenderit recusandae repellendus blanditiis? Laudantium dolorem nobis ipsam fugiat.
            Nesciunt vel asperiores ratione quisquam iure nam omnis sapiente harum, quaerat architecto tempore nobis, labore ex? Eius omnis dolore corrupti distinctio repudiandae dolorum quidem? Quasi sequi optio dolorum commodi sunt?
            Impedit, quo maiores dolor adipisci quos soluta non iure repudiandae porro facere corporis assumenda odio? Itaque consequatur facilis nobis sequi ipsa. Sapiente, repellendus perferendis. Provident quaerat quisquam nemo repudiandae alias!
            Exercitationem excepturi eos atque quis sapiente est beatae animi provident perspiciatis dolorum, dolore hic aliquam saepe deserunt explicabo! Odio, quo nihil adipisci dolores perspiciatis qui? Inventore possimus cumque beatae soluta?
            Earum nulla, natus repellendus aspernatur dolorum doloremque non commodi praesentium odit quod aperiam nostrum voluptate eum officiis! Ducimus ea, architecto temporibus expedita odit molestias corrupti. Ratione perspiciatis numquam illum? Exercitationem!
            Ab neque eius et! Molestias dolores modi cumque cum reiciendis nesciunt quibusdam velit, sed vitae labore porro eaque et ex autem commodi qui numquam laudantium dolor rem culpa dicta eligendi.
            Error quam id, minima dolor ullam ea non sunt, assumenda, natus dolore enim? Ratione inventore facere sequi placeat distinctio. Debitis necessitatibus corrupti autem, nisi iure harum nihil nam voluptas unde.
            Nam sed at quos qui, mollitia obcaecati harum. Soluta accusantium voluptatibus nam esse quas voluptatum omnis, magnam accusamus quasi maiores velit ipsum enim expedita hic facere sequi, officia facilis obcaecati.
            Corrupti molestias quaerat, quidem dolores aspernatur reprehenderit, magnam quos optio voluptatum illum, reiciendis sit velit. Reiciendis laboriosam, repellendus architecto temporibus optio quo doloribus velit dignissimos eveniet, necessitatibus debitis et similique!
            Illo aliquam adipisci magni nam necessitatibus tenetur, illum commodi cum et dicta reiciendis ratione enim ut dolorum modi, praesentium veritatis debitis officia, harum placeat velit voluptate ipsam! Molestias, expedita corporis!
            Inventore minus, voluptatum quisquam magni similique quaerat animi quae tempore. Mollitia quidem eum eos excepturi aperiam at corporis pariatur sit nisi dolores odio sapiente magnam obcaecati minima, totam, blanditiis sunt!
            Nisi quae magnam dicta, quasi numquam quaerat sapiente soluta voluptates. Nemo illo saepe fugiat mollitia impedit? Harum ullam saepe tempora, blanditiis totam illum exercitationem vel velit labore consequatur perferendis corrupti?
            Vitae quam voluptate deleniti ipsum voluptatum eaque et accusamus necessitatibus, labore nulla incidunt voluptas tempore repellendus nostrum repudiandae temporibus unde in, perspiciatis numquam illum blanditiis culpa. Velit, ex! Soluta, aut!
            Fuga at aliquid iste possimus sapiente quos quis, nam laborum a facilis expedita veritatis aut aspernatur mollitia odit fugiat labore velit vitae optio ab quam omnis ipsam alias? Vero, eum!
            Obcaecati nihil minima nemo eligendi libero adipisci accusamus ipsum praesentium minus! Modi commodi magnam dicta vero placeat nulla asperiores ipsam esse iste porro cumque sint, inventore totam quisquam deserunt aspernatur.
            Id iste delectus in quibusdam cupiditate, est exercitationem impedit vel aliquam tenetur laboriosam repellat! Ipsam veritatis fugit necessitatibus! Dolorem similique quos, repellendus fugit repellat illum laudantium blanditiis accusamus numquam reprehenderit.
            Obcaecati sed commodi suscipit vero omnis! Pariatur ut aspernatur, assumenda dolor dignissimos optio odit eveniet, distinctio omnis exercitationem sed quasi fugiat quod facilis id numquam molestias aliquam vero odio! Magnam?
            Recusandae facilis, eveniet atque nemo obcaecati distinctio earum natus provident rerum fugit et similique. Placeat animi reprehenderit, ab provident cum mollitia modi corporis iure tempore, adipisci soluta nihil, blanditiis quasi.
            Id ratione maxime enim fugiat quis provident, vero autem modi eligendi magnam excepturi? Repellendus doloremque minima doloribus quo, illo beatae fuga perferendis tenetur eius suscipit laudantium, numquam fugiat sint impedit?
            Accusantium perspiciatis voluptates mollitia aliquam adipisci quam, blanditiis sed dolorem odio quis facere architecto earum eligendi nulla quaerat? Error quis deleniti repellat ex in officia rem dolorum sapiente facere voluptatem.
            A excepturi quae numquam aspernatur, harum iusto dolore quis molestiae adipisci voluptatibus dolorem tenetur vel architecto debitis dolor saepe exercitationem vero perferendis ratione maxime ex deleniti? Velit rem quis optio!
            Sequi magnam vero, quia labore eum itaque quaerat ullam vitae ipsam quis, officiis soluta hic nihil. Voluptatem, velit. Placeat molestias quod necessitatibus veritatis culpa, architecto velit qui ad incidunt error.
            Ipsa ea maiores quas incidunt eligendi fugit, et culpa veritatis quaerat dolore dolorem veniam fugiat neque odit animi dolores! Quidem cum blanditiis hic beatae sit modi ab quaerat corrupti ut.
            Explicabo, voluptatibus error hic recusandae ipsam ratione asperiores? Cupiditate voluptates quis aspernatur assumenda quas maiores atque blanditiis ab, commodi molestiae est labore exercitationem voluptatibus accusantium fugit, impedit eveniet dolores dignissimos.
            Illum, deleniti veniam labore et voluptas, at corporis tenetur distinctio, rerum quo sed? Minus eum totam accusamus tempore architecto officiis expedita ut nesciunt accusantium, at consequuntur enim ex harum inventore!
            Rerum eius est suscipit minima ullam assumenda totam debitis cum corporis placeat, earum corrupti nihil, voluptates ab ex nostrum eveniet sunt tempora inventore aut distinctio excepturi. Nisi commodi aliquam reiciendis!
            Possimus eveniet explicabo, mollitia dolorem deserunt corrupti quo nobis fugit, saepe harum numquam accusamus cumque repellat facilis officia! Sed ut magnam praesentium odio nobis accusantium dolores tempora dolorum incidunt facilis!
            In commodi quasi ratione sunt atque sequi magnam aliquid cupiditate, facere culpa natus, dicta nam non quos deleniti. Nostrum doloribus quod ducimus nobis repudiandae praesentium, pariatur distinctio iure aperiam aspernatur.
            Veniam incidunt natus voluptas nisi, nam, magnam veritatis minus dolore nostrum vero unde quasi quas vitae maiores, sapiente architecto quaerat alias ratione doloribus fugiat cupiditate provident pariatur? Soluta, nihil blanditiis.
        </p>
    </div>
</body>
</html>
```