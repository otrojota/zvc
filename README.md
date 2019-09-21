# ZVC - 0.83

<p><i>
Work in progress. Collaborators needed, please see <a href="https://otrojota.github.io/zvc/">Documentation Page</a>, read the principles and contact us if you want to collaborate.
</i></p><br /><hr />


ZVC is a View-Controller Framework for web applications. It is focused on simplicity, component's reusability, lightweight, fast page loading and a fast development workflow.

Please visit <a href="https://otrojota.github.io/zvc/">Documentation Page</a> for documentation an live preview of current components.

Current web frameworks for front-end devolopment have evolved to the point they need a lot of tools for developing a simple one page application. ZVC aims to provide a robust base for designing complex and large web applications using only your preferred IDE, in very fast development cicles.

ZVC - Principles
* ECMAScript evolution is great, but I can wait until browsers support new features. ES6 is good enought for complex applications programming and I don't want to use a transpiler to generate my application code.

* Complex applications should be designed using components that can be reused, programmed and tested separately.
Components are not just renderers of a state. Components are objects that can hold its own state. Controller objects are instantiated for each required DOM element, holding a state. Components are loaded when used and discarded when replaced. Each main pane (main menu option for example) replaces prior one already selected and loaded in same area in the page. Garbage collector do the rest.

* I can decide to include scripts that I want to use in my application. It's ok to have some included scripts for optional, framework or external components, in index.html page.

* DOM manipulation has standarized across browsers and provides a very efficient and relatively simple way to implement specific code not handled by a framework. Its preferable to learn standard JavaScript and DOM manipulation than specific tools and frameworks than aims to hide DOM to the developer, in benefit of declarative programming.

* User business components should follow same patterns and life cicle that base (libray) components in framework.

* View part is HTML and CSS. Controller part is JavaScript. Most of the time they should live separately. Controller adds interaction logic, capturing events and refreshing content in the view.

* A component should be designed as a black-box. It should not depend on the design of its parent component (can ask for data or notify to parent through events) and should not know the details of its children (can call methods on them)

* Most of the users only visit some parts of the application. Components should be loaded as they are needed, optimizing network traffic and even avoiding the need of minify. There's no need for a single bundle with all code and styles.

* Browsers have very good developers tools. No extra plugins should be needed for debugging and monitoring.

* JQuery was a great contribution when DOM and APIs were not standarized between browsers and when APIs has a lower level than today (request, files, media, etc.). Off course you can still use it, but it should not be necessary

* Most of the time there's only one listener for a dom element event. There shoul be a simple way to receive common events.

* Same framework should be usable in hybrid apllications, targeting mobile or desktop applications.
