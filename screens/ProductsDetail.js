import React, {Component} from 'react'
import { Container, Content, Text} from 'native-base'

export default class Home extends Component{
    
    render(){
        const { params } = this.props.navigation.state
        const { id,name } = params.product
        
        return (
            <Container>
                <Content>
                    <Text> 
                    Product ID : {id}
                    </Text>
                    <Text> 
                    ProductName : {name}
                    </Text>
                    
                </Content>
            </Container>
        )
    }
}

