import { Component } from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Title from './components/Title'


class App extends Component {
  state = {
    productos: [
      { name: 'Vizzio Estuche 90g', price: 950, img: '/productos/1.jpg' },
      { name: 'Trencito 150g', price: 1600, img: '/productos/2.jpg' },
      { name: 'Costa Rama 115g', price: 1200, img: '/productos/3.jpg' },
      { name: 'Golden Nuss 140g', price: 1300, img: '/productos/4.jpg' },
      { name: 'Sahne-Nuss 160g', price: 1300, img: '/productos/5.jpg' },
      { name: 'Sahne-Nuss 250g', price: 3200, img: '/productos/6.jpg' },
      


    ],
    carro: [],
    esCarroVisible: false,
  }


  agregarAlCarro = (producto) => {
    const { carro } = this.state
    if (carro.find(x => x.name === producto.name)) {
      const newCarro = carro.map(x => x.name === producto.name
        ? ({
          ...x,
          cantidad: x.cantidad + 1
        })
        : x)
      return this.setState({ carro: newCarro })
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    })
  }

  mostrarCarro = () => {
    if(!this.state.carro.length) {
      return
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible })
  }

  render() {
    const { esCarroVisible } = this.state
    
    return (
      <div>
        <Navbar
          carro={this.state.carro}
          esCarroVisible={esCarroVisible}
          mostrarCarro={this.mostrarCarro}
        />
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
