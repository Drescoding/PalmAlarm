class Sibling1 extends Component {
    render() {
        return (
            <div>
                <div style={{ ...style.topLabel, color: secondaryColor }}>I am Sibling 1</div>
                <input style={style.textBox} type="text" 
                 placeholder="Write text" onChange={(e) => updateText(e.target.value)} />
            </div>
        )
    }
}

function updateText(text) {
    this.setState({text})
}

class Sibling2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "Initial State"
        }
        updateText = updateText.bind(this)
    }
    render() {
        return (
            <div>
                <div style={{ ...style.topLabel, color: primaryColor }}>I am Sibling 2</div>
                <div style={style.label}>{this.state.text}</div>
            </div>
        )
    }
}

class Example3 extends Component {
    render() {
        return (
            <div>
                <Sibling1 />
                <Sibling2 />
            </div>
        )
    }
}