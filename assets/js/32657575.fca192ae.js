"use strict";(self.webpackChunkantoinecoulon_docs=self.webpackChunkantoinecoulon_docs||[]).push([[3031],{1483:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"documentation/Langages/Kotlin","title":"Kotlin","description":"Android Jetpack Compose","source":"@site/docs/documentation/Langages/Kotlin.md","sourceDirName":"documentation/Langages","slug":"/documentation/Langages/Kotlin","permalink":"/antoinecoulon-docs/docs/documentation/Langages/Kotlin","draft":false,"unlisted":false,"editUrl":"https://github.com/antoinecoulon/antoinecoulon-docs/tree/master/docs/documentation/Langages/Kotlin.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"description":"Android Jetpack Compose"},"sidebar":"tutorialSidebar","previous":{"title":"React.js","permalink":"/antoinecoulon-docs/docs/documentation/Langages/React.js"},"next":{"title":"Angular","permalink":"/antoinecoulon-docs/docs/documentation/Langages/Angular"}}');var s=i(4848),l=i(8453);const t={sidebar_position:2,description:"Android Jetpack Compose"},o="Kotlin",a={},d=[{value:"Sommaire",id:"sommaire",level:3},{value:"Repos",id:"repos",level:2},{value:"Ressources",id:"ressources",level:2},{value:"Doc",id:"doc",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Android Studio",id:"android-studio",level:3},{value:"Workflow",id:"workflow",level:3},{value:"Types",id:"types",level:3},{value:"Strings",id:"strings",level:3},{value:"String interpolation",id:"string-interpolation",level:3},{value:"Getters / Setters",id:"getters--setters",level:3},{value:"Surcharge d&#39;op\xe9rateurs",id:"surcharge-dop\xe9rateurs",level:3},{value:"H\xe9ritage",id:"h\xe9ritage",level:3},{value:"Components",id:"components",level:3},{value:"Routing",id:"routing",level:3},{value:"ViewModel",id:"viewmodel",level:3},{value:"Webservices",id:"webservices",level:3},{value:"Dialog",id:"dialog",level:3},{value:"Design",id:"design",level:3},{value:"Traduction",id:"traduction",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"kotlin",children:"Kotlin"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Android Jetpack Compose"})}),"\n",(0,s.jsxs)(n.p,{children:["IDE: ",(0,s.jsx)(n.strong,{children:"Android Studio"})]}),"\n",(0,s.jsx)(n.h3,{id:"sommaire",children:"Sommaire"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#kotlin",children:"Kotlin"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#sommaire",children:"Sommaire"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#repos",children:"Repos"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#ressources",children:"Ressources"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#doc",children:"Doc"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#introduction",children:"Introduction"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#android-studio",children:"Android Studio"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#workflow",children:"Workflow"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#types",children:"Types"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#strings",children:"Strings"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#string-interpolation",children:"String interpolation"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#getters--setters",children:"Getters / Setters"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#surcharge-dop%C3%A9rateurs",children:"Surcharge d'op\xe9rateurs"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#h%C3%A9ritage",children:"H\xe9ritage"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#components",children:"Components"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#routing",children:"Routing"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#viewmodel",children:"ViewModel"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#webservices",children:"Webservices"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#dialog",children:"Dialog"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#design",children:"Design"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#traduction",children:"Traduction"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"repos",children:"Repos"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/antoinecoulon/DemoAndroid",children:"DemoAndroid"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/antoinecoulon/TpAndroid",children:"TpAndroid"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"ressources",children:"Ressources"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://chocolaterie.github.io/documentation/docs/category/android-kotlin",children:"Docs formateur ENI"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://play.kotlinlang.org/",children:"Kotlin Playground"})," - Bac \xe0 sable Kotlin"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://www.geeksforgeeks.org/android-jetpack-compose-tutorial/",children:"GeeksforGeeks Tutorials"})," - Divers tutos"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://dev.to/mjpasx/free-android-resources-52ec",children:"Free Android Resources"})," - Cours, docs, ressources"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://material-foundation.github.io/material-theme-builder/",children:"Material Theme Builder"})," - Constructeur de th\xe8mes Material"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"doc",children:"Doc"}),"\n",(0,s.jsx)(n.h3,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"Android Physique = Utilisez le pour tester vos app (Il faut un cable USB, le mode dev d'activ\xe9)"}),"\n",(0,s.jsx)(n.p,{children:"Emulateur Android = Accelerateur materiel/emulation (HAXM, HyperV)"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"android-studio",children:"Android Studio"}),"\n",(0,s.jsx)(n.p,{children:"Cr\xe9er un projet:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Android Studio",src:i(3609).A+"",width:"902",height:"650"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"workflow",children:"Workflow"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Cr\xe9er une page = Cr\xe9er une Activity"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Cr\xe9er une classe kotlin vide"}),"\n",(0,s.jsx)(n.li,{children:"Copier-coller le minimum d'une activity existante (copier MainActivity dans l\u2019exemple)"}),"\n",(0,s.jsx)(n.li,{children:"Ne pas oublier de renommer le nom de la classe Kotlin copi\xe9e-coll\xe9e"}),"\n",(0,s.jsxs)(n.li,{children:["Supprime tout ce que t'as fait sauf :","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"le onCreate"}),"\n",(0,s.jsx)(n.li,{children:"le preview"}),"\n",(0,s.jsx)(n.li,{children:"le DemoPage (supprimer que le contenu de la page)"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Renomme DemoPage par le context page actuel (ex: ArticlePage)"}),"\n",(0,s.jsxs)(n.li,{children:["Pour que l'activity soit reconnu dans ton projet:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"L'ajouter dans le AndroidManifest.xml"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"types",children:"Types"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"// String\nval string: String = \"Yasha Gozwan\"\n\n// Character\nval char: Char = 'A'\n\n// Integer Numbers\nval byte: Byte = 122\nval short: Short = 12_345\nval int: Int = 1_234_567_891\nval long: Long = 1_123_456_789_123_123_123L\n\n// Float Numbers\nval float: Float = 123.123F\nval double: Double = 123.123\n\n// Boolean\nval isVerify: Boolean = false\nval isSuccess: Boolean = true\n"})}),"\n",(0,s.jsx)(n.h3,{id:"strings",children:"Strings"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'// String\nval myStr = "Hello World"\n\n// uppercase and lowercase\nval upper = myStr.uppercase()\nval lower = myStr.lowercase()\n\n// Get length\n// length\nval myLength = myStr.length\n\n// getting first and last character\nval firstChar = myStr[0]\nval lastChar = myStr[myStr.length - 1]\n'})}),"\n",(0,s.jsx)(n.h3,{id:"string-interpolation",children:"String interpolation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'// String Interpolation\nval name = "Yasha"\nval age = 26\nprintln("Hello everyone. My name is $name and i $age old thanks")\n'})}),"\n",(0,s.jsx)(n.h3,{id:"getters--setters",children:"Getters / Setters"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"// Les getters et setters sont implicites et peuvent \xeatre surcharg\xe9s\nnewPerson.age //Getter\nnewPerson.age = 12 //Setter\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"class Person(var age: Int) {\n\n\t// Getters et setters explicites\n\tvar age : Int = age\n\tget() = field\n\tset(value) {\n\t\tfield = value\n\t}\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"//Doc pour les getter / setter\nvar <propertyName>[: <PropertyType>] [= <property_initializer>]\n[<getter>]\n[<setter>]\n"})}),"\n",(0,s.jsx)(n.h3,{id:"surcharge-dop\xe9rateurs",children:"Surcharge d'op\xe9rateurs"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"operator fun plus(other: Person) : Person {\n\tthis.age += other.age\n\treturn this;\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:'Ici on surcharge l\'op\xe9rateur "+"'}),"\n",(0,s.jsx)(n.h3,{id:"h\xe9ritage",children:"H\xe9ritage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"open class Person(var age : Int){\n\t[...]\n}\n\nclass Salary(var salaire : Int, var age : Int) : Person(age){\n\t[..]\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:'La classe "Salary" h\xe9rite de la classe "Person" (on rappelle le constructeur)'}),"\n",(0,s.jsx)(n.h3,{id:"components",children:"Components"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Annotation Composable:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"@Composable\nfun DemoPage() { ... }\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Column:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'Column {\n    Text("Exemple...")          // Version \xe0 ne pas faire!\n    Text(text = "Exemple...")   // Version explicite\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("em",{children:"Bonne pratique:"}),' d\xe9clarer les attributs pour \xe9viter les erreurs \xe0 cause de l\'ordre de d\xe9claration ("text =")']}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Row:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'Column {\n    Text(text = "Ligne 1")\n    Text(text = "Ligne 2")\n    Row {\n        Text(text = "Ligne 3, col 1")\n        Text(text = "Ligne 3, col 2")\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Modifier:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'Text(text = "...", modifier = Modifier.fillMaxWidth())\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Cr\xe9er un composant:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'@Composable\nfun EniTextField(modifier: Modifier = Modifier, hintText : String = "") {\n    TextField(\n        value = "",\n        onValueChange = {},\n        modifier = modifier,\n        placeholder = {\n            Text(text = hintText)\n        }\n    )\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"routing",children:"Routing"}),"\n",(0,s.jsx)(n.p,{children:'Les deux fichiers suivants permettent de d\xe9finir les routes, on les place dans un package "navigation":'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",metastring:'title="navigation/Screens.kt"',children:'package com.example.tpandroid.navigation\n\nsealed class Screens(val route: String) {\n    object Home: Screens("home_screen")\n    object Recovery: Screens("recovery_screen")\n    object SignIn: Screens("signin_screen")\n    object Articles: Screens("articles_screen")\n}\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",metastring:'title="navigation/NavGraph.kt"',children:"@Composable\nfun NavGraph (navController: NavHostController){\n    NavHost(navController = navController, startDestination = Screens.Home.route){\n        composable(route = Screens.Home.route){\n            HomeScreen(navController)\n        }\n        composable(route = Screens.Recovery.route){\n            RecoveryScreen(navController)\n        }\n        composable(route = Screens.SignIn.route){\n            SignInScreen(navController)\n        }\n        composable(route = Screens.Articles.route){\n            ArticleScreen()\n        }\n    }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Dans la classe MainActivity, on ajoute:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"setContent {\n    TpAndroidTheme {\n        // Ajout du navController\n        Surface {\n            val navController = rememberNavController()\n            NavGraph(navController = navController)\n        }\n        \n    }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Puis dans chaque screen:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"@Composable\nfun HomeScreen(navController: NavController) {}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"viewmodel",children:"ViewModel"}),"\n",(0,s.jsxs)(n.p,{children:["Vulgarisation du ViewModel\n",(0,s.jsx)(n.img,{alt:"ViewModel",src:i(1612).A+"",width:"1113",height:"1812"})]}),"\n",(0,s.jsx)(n.h3,{id:"webservices",children:"Webservices"}),"\n",(0,s.jsx)(n.p,{children:"Ajouter les d\xe9pendances suivantes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",metastring:'title="build.gradle.kts"',children:"// Moshi\nimplementation(libs.moshi)\nimplementation(libs.moshi.kotlin)\n\n// Retrofit\nimplementation(libs.retrofit)\nimplementation(libs.converter.moshi)\n\n// Ok HTTP\nimplementation(libs.okhttp)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Cr\xe9er une classe RetrofitTools:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",metastring:'title="RetrofitTools.kt"',children:'class RetrofitTools {\n\n    // Kotlin :  companion object = tout ce qui est dedans est statics\n    companion object{\n        // La racine de l\'api\n        // val BASE_URL = "http://localhost:3000/"\n\n        // La racine de l\'api\n        val BASE_URL = "http://161.35.39.34:3000/"\n\n        // Pour les personnes emulateurs :\n        //val BASE_URL = "http://10.0.2.2:3000/"\n\n        // L\'utilitaire conversion JSON <=> Objet\n        val moshi = Moshi.Builder().add(KotlinJsonAdapterFactory()).build();\n\n        // Retrofit\n        val retrofit = Retrofit.Builder()\n            .addConverterFactory(MoshiConverterFactory.create(moshi))\n            .baseUrl(BASE_URL).build();\n    }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Moshi permet de convertir du JSON. On cr\xe9\xe9 une instance Retrofit qui va nous permettre d'appeler l'API. Le \"companion object\" est l'\xe9quivalent d'une classe statique, on peut l'appeler de n'importe o\xf9 dans le projet."}),"\n",(0,s.jsx)(n.p,{children:"Cr\xe9er une interface qui permettra de d\xe9terminer les endpoints de l'API:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",metastring:'title="PersonService.kt"',children:'interface PersonService {\n    @GET("persons.json") // Annotation pour savoir quelle URL appeler\n    suspend fun getPersons(): List<Person>\n\n    // Singleton Retrofit pour acc\xe9der au service: PersonApi.personService\n    object PersonApi {\n        val personService : PersonService by lazy { retrofit.create(PersonService::class.java) }\n    }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Notre data class doit avoir la m\xeame structure que le JSON de l'API:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",metastring:'title="Person.kt"',children:'data class Person (\n    var pseudo: String = "",\n    var age: Int = 0\n)\n'})}),"\n",(0,s.jsx)(n.p,{children:"On retourne dans le ViewModel:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",metastring:'title="ListPersonViewModel.kt"',children:'class ListPersonViewModel: ViewModel() {\n    // Liste de base, pas obligatoire !!!!\n    var persons = MutableStateFlow<List<Person>>(mutableListOf(\n        Person("titi", 360),\n        Person("dddd", 45)\n    ))\n\n    /**\n     * Fonction qui permet de charger la liste de personnes dans le view model\n     */\n    fun reloadPersons() {\n        // Simulation de l\'API = Obsol\xe8te\n//        persons.value = mutableListOf(\n//            Person("pipi", 360),\n//            Person("popo", 45)\n//        )\n\n        // Coroutine (t\xe2che asynchrone)\n        viewModelScope.launch {\n            // Appeler le service API\n            // apiResponse = Retour de l\'api\n            val apiResponse = PersonService.PersonApi.personService.getPersons()\n            \n            // Remplacer la liste de personnes du ViewModel par celle de l\'API\n            persons.value = apiResponse\n        }\n    }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Ne pas oublier les permissions r\xe9seau/internet dans le manifest!!!"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",metastring:'title="AndroidManifest.xml"',children:'<uses-permission android:name="android.permission.INTERNET" />\n<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />\n'})}),"\n",(0,s.jsx)(n.p,{children:"On peut maintenant s'en servir dans la vue:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",metastring:'title="ListPersonActivity.kt"',children:'@Composable\nfun ListPersonPage(viewModel: ListPersonViewModel){\n    // J\'\xe9coute les changements de counter en temps r\xe9el\n    val personsState by viewModel.persons.collectAsState()\n\n    EniPage {\n        Column(modifier = Modifier.padding(32.dp)) {\n\n            WrapPadding {\n                EniButton(buttonText = "Appel API", onClick ={\n                    // Rafraichir les donn\xe9es\n                    // = Appeler la fonction qui rafraichie les donn\xe9es dans le VM\n                    viewModel.reloadPersons()\n                })\n            }\n\n            LazyColumn {\n                items(personsState) { person ->\n                    Card(modifier = Modifier.padding(4.dp).border(1.dp, Color.Cyan, RoundedCornerShape(40.dp)), colors = CardDefaults.cardColors(Color.Transparent)) {\n                        Text(\n                            text = "Pseudo: ${person.pseudo}",\n                            modifier = Modifier.fillMaxWidth(),\n                            textAlign = TextAlign.Center,\n                            color = Color.White,\n                            fontWeight = FontWeight.Bold\n                        )\n                        Text(\n                            text = "Age: ${person.age}",\n                            modifier = Modifier.fillMaxWidth(),\n                            textAlign = TextAlign.Center,\n                            color = Color.White\n                        )\n                    }\n                }\n            }\n        }\n    }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Sch\xe9ma:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Sch\xe9ma API",src:i(1801).A+"",width:"858",height:"574"})}),"\n",(0,s.jsx)(n.h3,{id:"dialog",children:"Dialog"}),"\n",(0,s.jsx)(n.p,{children:"Utilisation de la classe Dialog qui permet d'afficher une boite de dialogue, ici on s'en servira pour afficher un loader."}),"\n",(0,s.jsx)(n.p,{children:"On cr\xe9\xe9 un fichier AppDialogHelper:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",metastring:'title="helpers/AppDialogHelper.kt"',children:"class AppDialogHelper {\n\n    // Singleton explicite\n    companion object {\n        val instance : AppDialogHelper by lazy { AppDialogHelper() }\n\n        fun get() : AppDialogHelper {\n            return instance;\n        }\n    }\n\n    // Sert \xe0 savoir en temps r\xe9el si il faut afficher ou pas la dialog\n    var dialogModelData = MutableStateFlow(DialogModelData());\n\n    /**\n     * Afficher la popup\n     */\n    fun showDialog(message: String){\n        // Forcer le rafraichissement de l'etat\n        dialogModelData.value = dialogModelData.value.copy(isShow = true, message = message);\n    }\n\n    /**\n     * Fermer la popup\n     */\n    fun closeDialog() {\n        // Forcer le rafraichissement de l'etat\n        dialogModelData.value = dialogModelData.value.copy(isShow = false);\n    }\n}\n\n@Composable\nfun ProgressDialog(){\n    // Je vais ecouter quand la dialog est true ou false\n    // Donc quand je dois afficher ou pas\n    val dialogModelDataState by AppDialogHelper.get().dialogModelData.collectAsState();\n\n    if (dialogModelDataState.isShow) {\n        Dialog(onDismissRequest = {}){\n            Box(modifier = Modifier.background(\n                color = Color(0xFFFFFFFF),\n                shape = RoundedCornerShape(30.dp)\n            )\n                .padding(20.dp)) {\n                Column(horizontalAlignment = Alignment.CenterHorizontally) {\n                    CircularProgressIndicator()\n                    Text(text = dialogModelDataState.message)\n                }\n            }\n        }\n    }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"La classe DialogModelData va permettre de g\xe9rer les messages et l'affichage ou non de la popup:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",metastring:'title="helpers/DialogModelData.kt"',children:'data class DialogModelData(var isShow : Boolean = false, var message : String = "") {\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"On ajoute dans l'Activity en le passant directement dans le th\xe8me de l'app, on pourra l'utiliser sur toutes les pages:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",metastring:'title="ui.theme/AppTheme.kt"',children:'// Main theme\n@Composable\nfun Page(content: @Composable () -> Unit) {\n    TpAndroidTheme {\n        Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->\n            Box(modifier = Modifier.padding(innerPadding)) {\n                Image(\n                    painter = painterResource(R.drawable.background),\n                    contentDescription = "",\n                    contentScale = ContentScale.Crop,\n                    modifier = Modifier.fillMaxSize()\n                )\n                content()\n                \n                ProgressDialog()\n                \n            }\n        }\n    }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Enfin dans le ViewModel:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",metastring:'title="ArticleViewModel.kt"',children:'fun loadArticles(callback: () -> Unit) {\n        \n    AppDialogHelper.get().showDialog("Loading articles in progress...")\n\n    viewModelScope.launch {\n\n        // Simuler 1 sec de lag en dev pour voir la popup\n        delay(1000)\n        val apiResponse = ArticleService.ArticleApi.articleService.getArticles()\n\n        articles.value = apiResponse\n    \n        // On attend que la t\xe2che ASYNC soit termin\xe9e\n        AppDialogHelper.get().closeDialog()\n    }\n}\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"design",children:"Design"}),"\n",(0,s.jsx)(n.p,{children:"KISS \u2192 Keep It Simple, Stupid"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"KISS Design",src:i(9436).A+"",width:"368",height:"545"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"traduction",children:"Traduction"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Traduction",src:i(6406).A+"",width:"1058",height:"561"})}),"\n",(0,s.jsx)(n.p,{children:"Un fichier strings.xml (dans res/values/) qui contient des combinaisons cl\xe9-texte:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",metastring:'title="res/values/strings.xml"',children:'<resources>\n    <string name="app_name">TpAndroid</string>\n    <string name="app_msg_credentials_aware">Please be aware when you enter credentials in the login page.</string>\n    <string name="app_field_text_email">Email</string>\n    <string name="app_field_text_password">Password</string>\n    <string name="app_btn_text_forgot_password">I forgot my password !</string>\n    <string name="app_btn_text_sign_in">Sign In</string>\n    <string name="app_msg_no_account">Don\\\'t have an account ?</string>\n    <string name="app_btn_text_register">Register now !</string>\n    <string name="app_msg_welcome_registration">Welcome to the registration page.</string>\n    <string name="app_field_text_pseudo">Pseudo</string>\n</resources>\n'})}),"\n",(0,s.jsx)(n.p,{children:"Et le nom des cl\xe9s est utilis\xe9 dans nos fichiers \xe0 la place des textes, via stringResource()"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"Text(\n      text = stringResource(R.string.app_msg_welcome_registration)\n)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Facilite l'impl\xe9mentation de diff\xe9rentes traductions"})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1612:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/kotlin_vulgarisation_mvvm-6cd8d0f6a11ef1e9099d5cb544b1ae0c.png"},1801:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/kotlin_schema_API-5387053a921a26cf1cb6a24494a81865.png"},3609:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/kotlin_android-studio-809e894fcf7fbe040afece428714fd05.png"},6406:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/kotlin_traduction-739339d45f19febb4cc447c19d07baf0.png"},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>o});var r=i(6540);const s={},l=r.createContext(s);function t(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(l.Provider,{value:n},e.children)}},9436:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/kotlin_design-kiss-f1a4bac71c85df472e7288cccb1fd579.png"}}]);