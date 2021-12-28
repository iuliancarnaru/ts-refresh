import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { UserContextProvider } from './components/context/UserContext';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { User } from './components/context/User';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateLiterals/Toast';
import { CustomButton } from './components/html/Button';
import { Text } from './components/polymorphic/Text';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  };

  const nameList = [
    {
      id: 1,
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      id: 2,
      first: 'Clark',
      last: 'Kent',
    },
  ];

  return (
    <div className="App">
      <Greet name="Iulian" messageCount={20} isLoggedIn={true} />
      <Greet name="Aneta" isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo!</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => console.log('button clicked', event, id)}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container styles={{ border: '1px solid black', padding: '1rem' }} />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <Private isLoggedIn component={Profile} />
      {/* <List
        items={['Batman', 'Superman', 'Spiderman']}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      <List items={nameList} onClick={(item) => console.log(item)} />
      {/* <RandomNumber value={10} isPositive isNegative isZero /> */}
      <RandomNumber value={10} isPositive />
      <Toast position="left-center" />
      <CustomButton variant="primary" onClick={() => console.log('clicked')}>
        {/* <div>Primary button</div> --> Type 'Element' is not assignable to type 'string' */}
        Primary button
      </CustomButton>
      <div>
        <Text as="h1" size="lg">
          Heading
        </Text>
        <Text as="p" size="md">
          Paragraph
        </Text>
        <Text as="label" htmlFor="someId" size="sm" color="secondary">
          Label
        </Text>
      </div>
    </div>
  );
}

export default App;
