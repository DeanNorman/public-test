import React from 'react';
import {
   Container,
   Content,
   Header,
   Lists,
   Column
} from './styled-components'

const JobDevOps = () => {
   return (
      <Container>
         <Content>
            <Header>
            <h2>Devops Engineer</h2>
            <p>22seven from Old Mutual is a money management tool helping South Africans to show their money who’s boss. Our customers are our superheroes and like Yoda, Gandalf and Dumbledore, 22seven helps our superheroes with the tools to make better financial decisions.<br/><br/>

            22seven is looking for a DevOps Engineer to join our tribe and help our customers achieve better financial freedom.
            </p>
            </Header>
            <Lists>
               <Column>
                  <h3>Skills needed for the role</h3>
                  <ul>
                     <li>
                        <p>
                           Experience with configuration management tools. Eg. Puppet.
                        </p>
                     </li>
                     <li>
                     <p>Testing 1</p>
                     </li>
                  </ul>
               </Column>
               <Column>
                  <h3>The kind of people we would like in our 22seven tribe</h3>
                  <ul>
                     <li>
                     <p>
                        Outgoing personality
                        </p>
                     </li>
                     <li>
                        <p>
                           Not afraid to try new things.
                        </p>
                     </li>
                  </ul>
               </Column>
            </Lists>
            <Lists>
            <Column>
                  <h3>Tasks</h3>
                  <ul>
                     <li>
                     <p>
                        Outgoing personality
                        </p>
                     </li>
                     <li>
                        <p>
                           Not afraid to try new things.
                        </p>
                     </li>
                  </ul>
               </Column>
            </Lists>
         </Content>
      </Container> 
   )
}

export default JobDevOps;
