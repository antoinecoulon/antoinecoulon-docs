"use strict";(self.webpackChunkantoinecoulon_docs=self.webpackChunkantoinecoulon_docs||[]).push([[838],{1716:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>o,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"documentation/Langages/Database","title":"Base de donn\xe9es","description":"- Base de donn\xe9es","source":"@site/docs/documentation/Langages/Database.md","sourceDirName":"documentation/Langages","slug":"/documentation/Langages/Database","permalink":"/antoinecoulon-docs/docs/documentation/Langages/Database","draft":false,"unlisted":false,"editUrl":"https://github.com/antoinecoulon/antoinecoulon-docs/tree/master/docs/documentation/Langages/Database.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Angular","permalink":"/antoinecoulon-docs/docs/documentation/Langages/Angular"},"next":{"title":"Express.js","permalink":"/antoinecoulon-docs/docs/documentation/Langages/Express.js"}}');var a=s(4848),l=s(8453);const i={},d="Base de donn\xe9es",u={},c=[{value:"Ressources",id:"ressources",level:2},{value:"Guide des Op\xe9rateurs (MongoDB)",id:"guide-des-op\xe9rateurs-mongodb",level:2},{value:"Op\xe9rateurs de Comparaison",id:"op\xe9rateurs-de-comparaison",level:3},{value:"Op\xe9rateurs Logiques",id:"op\xe9rateurs-logiques",level:3},{value:"Op\xe9rateurs de Tableau",id:"op\xe9rateurs-de-tableau",level:3},{value:"Op\xe9rateurs d&#39;Existence",id:"op\xe9rateurs-dexistence",level:3},{value:"Op\xe9rateurs de Mise \xe0 Jour",id:"op\xe9rateurs-de-mise-\xe0-jour",level:3},{value:"Bonnes Pratiques",id:"bonnes-pratiques",level:2},{value:"Notes Importantes",id:"notes-importantes",level:2}];function t(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"base-de-donn\xe9es",children:"Base de donn\xe9es"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#base-de-donn%C3%A9es",children:"Base de donn\xe9es"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#ressources",children:"Ressources"})}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#guide-des-op%C3%A9rateurs-mongodb",children:"Guide des Op\xe9rateurs (MongoDB)"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#op%C3%A9rateurs-de-comparaison",children:"Op\xe9rateurs de Comparaison"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#op%C3%A9rateurs-logiques",children:"Op\xe9rateurs Logiques"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#op%C3%A9rateurs-de-tableau",children:"Op\xe9rateurs de Tableau"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#op%C3%A9rateurs-dexistence",children:"Op\xe9rateurs d'Existence"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#op%C3%A9rateurs-de-mise-%C3%A0-jour",children:"Op\xe9rateurs de Mise \xe0 Jour"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#bonnes-pratiques",children:"Bonnes Pratiques"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#notes-importantes",children:"Notes Importantes"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"ressources",children:"Ressources"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://www.mysqltutorial.org/getting-started-with-mysql/mysql-sample-database/",children:"MySQL Sample Database"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"guide-des-op\xe9rateurs-mongodb",children:"Guide des Op\xe9rateurs (MongoDB)"}),"\n",(0,a.jsx)(n.h3,{id:"op\xe9rateurs-de-comparaison",children:"Op\xe9rateurs de Comparaison"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"$eq (\xc9gal)\n"})}),"\n",(0,a.jsx)(n.p,{children:"Compare si une valeur est \xe9gale \xe0 une valeur sp\xe9cifi\xe9e."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- Trouve tous les utilisateurs de 25 ans\n\ndb.users.find({ age: { $eq: 25 } })\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"$ne (Non \xc9gal)\n"})}),"\n",(0,a.jsx)(n.p,{children:"Compare si une valeur n'est pas \xe9gale \xe0 une valeur sp\xe9cifi\xe9e."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'-- Trouve tous les produits qui ne sont pas inactifs\n\ndb.products.find({ status: { $ne: "inactive" } })\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"$gt (Plus Grand Que)\n"})}),"\n",(0,a.jsx)(n.p,{children:"Compare si une valeur est sup\xe9rieure \xe0 une valeur sp\xe9cifi\xe9e."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- Trouve tous les produits plus chers que 100\u20ac\n\ndb.products.find({ price: { $gt: 100 } })\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"$lt (Plus Petit Que)\n"})}),"\n",(0,a.jsx)(n.p,{children:"Compare si une valeur est inf\xe9rieure \xe0 une valeur sp\xe9cifi\xe9e."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- Trouve tous les utilisateurs mineurs\n\ndb.users.find({ age: { $lt: 18 } })\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"$gte (Plus Grand ou \xc9gal)\n"})}),"\n",(0,a.jsx)(n.p,{children:"Compare si une valeur est sup\xe9rieure ou \xe9gale \xe0 une valeur sp\xe9cifi\xe9e."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- Trouve les produits avec un stock >= 10\n\ndb.products.find({ stock: { $gte: 10 } })\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"$lte (Plus Petit ou \xc9gal)\n"})}),"\n",(0,a.jsx)(n.p,{children:"Compare si une valeur est inf\xe9rieure ou \xe9gale \xe0 une valeur sp\xe9cifi\xe9e."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- Trouve les produits avec un stock bas (\u2264 5)\n\ndb.products.find({ stock: { $lte: 5 } })\n"})}),"\n",(0,a.jsx)(n.h3,{id:"op\xe9rateurs-logiques",children:"Op\xe9rateurs Logiques"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"$and\n"})}),"\n",(0,a.jsx)(n.p,{children:"Combine plusieurs conditions avec un ET logique."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- Trouve les produits chers ET en stock\n\ndb.products.find({\n\n    $and: [\n\n        { price: { $gt: 50 } },\n\n        { stock: { $gt: 0 } }\n\n    ]\n\n})\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"$or\n"})}),"\n",(0,a.jsx)(n.p,{children:"Combine plusieurs conditions avec un OU logique."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'-- Trouve les utilisateurs actifs OU admin\n\ndb.users.find({\n\n    $or: [\n\n        { status: "active" },\n\n        { role: "admin" }\n\n    ]\n\n})\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"$not\n"})}),"\n",(0,a.jsx)(n.p,{children:"Inverse la condition sp\xe9cifi\xe9e."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- Trouve les utilisateurs qui ne sont pas mineurs\n\ndb.users.find({\n\n    age: { $not: { $lt: 18 } }\n\n})\n"})}),"\n",(0,a.jsx)(n.h3,{id:"op\xe9rateurs-de-tableau",children:"Op\xe9rateurs de Tableau"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"$in\n"})}),"\n",(0,a.jsx)(n.p,{children:"V\xe9rifie si une valeur correspond \xe0 une des valeurs d'un tableau."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'-- Trouve les produits dans certaines cat\xe9gories\n\ndb.products.find({\n\n    category: { $in: ["sport", "loisir"] }\n\n})\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"$nin\n"})}),"\n",(0,a.jsx)(n.p,{children:"V\xe9rifie si une valeur ne correspond \xe0 aucune des valeurs d'un tableau."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'-- Trouve les utilisateurs avec un statut ni bloqu\xe9 ni supprim\xe9\n\ndb.users.find({\n\n    status: { $nin: ["blocked", "deleted"] }\n\n})\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"$all\n"})}),"\n",(0,a.jsx)(n.p,{children:"V\xe9rifie si un tableau contient tous les \xe9l\xe9ments sp\xe9cifi\xe9s."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'-- Trouve les t\xe2ches marqu\xe9es urgent ET important\n\ndb.tasks.find({\n\n    tags: { $all: ["urgent", "important"] }\n\n})\n'})}),"\n",(0,a.jsx)(n.h3,{id:"op\xe9rateurs-dexistence",children:"Op\xe9rateurs d'Existence"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"$exists\n"})}),"\n",(0,a.jsx)(n.p,{children:"V\xe9rifie si un champ existe."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- Trouve les utilisateurs avec un email\n\ndb.users.find({\n\n    email: { $exists: true }\n\n})\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"$type\n"})}),"\n",(0,a.jsx)(n.p,{children:"V\xe9rifie le type d'un champ."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'-- Trouve les documents o\xf9 l\'\xe2ge est un nombre\n\ndb.users.find({\n\n    age: { $type: "number" }\n\n})\n'})}),"\n",(0,a.jsx)(n.h3,{id:"op\xe9rateurs-de-mise-\xe0-jour",children:"Op\xe9rateurs de Mise \xe0 Jour"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"$set\n"})}),"\n",(0,a.jsx)(n.p,{children:"D\xe9finit une nouvelle valeur pour un champ."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'-- Met \xe0 jour le statut d\'un utilisateur\n\ndb.users.updateOne(\n\n    { _id: userId },\n\n    { $set: { status: "active" } }\n\n)\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"$unset\n"})}),"\n",(0,a.jsx)(n.p,{children:"Supprime un champ d'un document."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'-- Supprime un champ temporaire\n\ndb.users.updateOne(\n\n    { _id: userId },\n\n    { $unset: { tempField: "" } }\n\n)\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"$inc\n"})}),"\n",(0,a.jsx)(n.p,{children:"Incr\xe9mente un champ d'une valeur sp\xe9cifi\xe9e."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- Incr\xe9mente un compteur\n\ndb.counters.updateOne(\n\n    { _id: counterId },\n\n    { $inc: { value: 1 } }\n\n)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"$push\n"})}),"\n",(0,a.jsx)(n.p,{children:"Ajoute un \xe9l\xe9ment \xe0 un tableau."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'-- Ajoute un tag \xe0 un produit\n\ndb.products.updateOne(\n\n    { _id: productId },\n\n    { $push: { tags: "new" } }\n\n)\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"$pull\n"})}),"\n",(0,a.jsx)(n.p,{children:"Retire un \xe9l\xe9ment d'un tableau."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'-- Retire une cat\xe9gorie d\'un produit\n\ndb.products.updateOne(\n\n    { _id: productId },\n\n    { $pull: { categories: "obsolete" } }\n\n)\n'})}),"\n",(0,a.jsx)(n.h2,{id:"bonnes-pratiques",children:"Bonnes Pratiques"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Utilisez les index appropri\xe9s pour optimiser vos requ\xeates"}),"\n",(0,a.jsx)(n.li,{children:"Combinez les op\xe9rateurs pour des requ\xeates plus pr\xe9cises"}),"\n",(0,a.jsx)(n.li,{children:"Privil\xe9giez les op\xe9rateurs sp\xe9cifiques aux types de donn\xe9es"}),"\n",(0,a.jsx)(n.li,{children:"Testez vos requ\xeates sur un petit jeu de donn\xe9es avant la production"}),"\n",(0,a.jsx)(n.li,{children:"Utilisez la m\xe9thode explain() pour analyser les performances des requ\xeates"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"notes-importantes",children:"Notes Importantes"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Les op\xe9rateurs commencent toujours par le symbole $"}),"\n",(0,a.jsx)(n.li,{children:"La casse est importante dans MongoDB"}),"\n",(0,a.jsx)(n.li,{children:"Les valeurs compar\xe9es doivent \xeatre du m\xeame type"}),"\n",(0,a.jsx)(n.li,{children:"Certains op\xe9rateurs peuvent \xeatre combin\xe9s"}),"\n",(0,a.jsx)(n.li,{children:"Les performances peuvent varier selon les op\xe9rateurs utilis\xe9s"}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>d});var r=s(6540);const a={},l=r.createContext(a);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);