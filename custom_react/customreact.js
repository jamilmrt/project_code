function customRender(reactElement, mainContainer){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    mainContainer.appedChild(domElement)
*/
    document.domElement = document.createElement(reactElement.type)
    document.domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop ===  'children') continue;
        domElement.setAttribute(prop, reactElement.proops[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
      href: 'https://reactjs.org',
      target: '_blank',
    //   rel: 'noopener noreferrer',
    },
    children:  'Clicked me to visite  React'
      

}

const mainContainer=document.querySelector('#root')

customRender(reactElement, mainContainer)
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>, 
//   )