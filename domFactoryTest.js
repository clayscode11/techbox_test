const elFactory = (type, attributes, children) => {
    const el = document.createElement(type)

    for (key in attributes) {
        el.setAttribute(key, attributes[key])
    }

    children.forEach(child => {
        if(typeof child === 'string') {
            el.appendChild(document.createTextNode(child))
        } else {
            el.appendChild(child)
        }
    })

    return el
}

const taskPreview = elFactory(
    'article'
    { class: 'task'},
    elFactory('h3', {}, "Enhance Component")
)

document.body.appendChild(taskPreview)