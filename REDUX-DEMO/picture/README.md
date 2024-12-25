https://www.youtube.com/watch?v=2lxCaLJ2Rbk&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=5
1. Three Core Concepts

    Cake Shop

    Entities

    Shop        - Stores cakes on a shelf
    Shopkeeper  - At the front of the store
    Customer    - At the store entrance


    Activities

    Customer   - Buy a cake
    ShopKeeper - Remove a cake from the shelf
            - Receipt to keep track


2. Three Principles
    First Principle
        The state of your whole application is stored in an object tree within a single store


3. Redux


4. Actions
    1. The only way your applciation can interact with the store
    2. Carry some information from your app to redux store
    3. Plain JavaScript objects
    4. Have a 'type' property that indicates the type of action being performed
    5. The 'type' property is typically defined as string constants


5. Reducers
    1. Specify how the app's state changes in response to actions sent to the store
    2. Function that accepts state and action as arguements, and returns the next state of the application
    3. (presviousState, action) => newState

6. Redux Store
    1. One store for the entire application
    2. Responsibilities - 
        1. Holds application state
        2. Allows access to state via getState()
        3. Allows state to be updated via dispatch(action)
        4. Registers listeners via subscribe(listener)
        5. Handles unregistering of listeners via the function returned by subscribe(listener)

7 Cakes & Ice Creams
    1. Cake shop
    2. Cakes stored on the shelf
    3. Shopkeeper to handle BUY_CAKE from customer


    Sell ice creams!
    Ice Creams stored in the freezer
    New shopkeeper to handle BUY_ICECREAM from customer

9. Multiple Reducers
    1. 