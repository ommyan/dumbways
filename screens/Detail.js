import React, {Component} from 'react'
import { Container, Content, Text} from 'native-base'

export default class Home extends Component{
    
    render(){
        const { params } = this.props.navigation.state
        const { id } = params
        
        return (
            <Container>
                <Content>
                    <Text> 
                        Detail Page With ID= {params.id} 
                        ID = {id}
                        </Text>
                </Content>
            </Container>
        )
    }
}

