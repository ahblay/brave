import axios from "axios";

class Config extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data1: "",
            data2: "",
            data3: "",
            data4: "",
            data5: ""
        }
    }

    handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        console.log(value, name)

        this.setState({
            [name]: value
        })

        console.log(this.state)
    }

    submitConfig = () => {
        console.log(this.state);
        axios.post("/api/config", {
            config: this.state
        })
    }

    render() {
        return (
            <form>
                <label>
                    Data1:
                    <input
                        name="data1"
                        type="string"
                        value={this.state.data1}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Data2:
                    <input
                        name="data2"
                        type="string"
                        value={this.state.data2}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Data3:
                    <input
                        name="data3"
                        type="string"
                        value={this.state.data3}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Data4:
                    <input
                        name="data4"
                        type="string"
                        value={this.state.data4}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Data5:
                    <input
                        name="data5"
                        type="string"
                        value={this.state.data5}
                        onChange={this.handleInputChange}
                    />
                </label>
                <input type="submit" value="Submit" onClick={this.submitConfig} />
            </form>
        )
    }
}

export default Config