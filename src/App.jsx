import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { fetchRecipes } from './redux/recipes';
import { fetchUsers, fetchOneUserById } from './redux/users/actions';

function App() {
  const dispatch = useDispatch();
  const { recipes, isLoading, hasErrors } = useSelector((state) => state.recipes);
  const usersState = useSelector((state) => state.users);

  const renderRecipes = () => {
    if (isLoading || usersState.isLoading) {
      return <p>Loading recipes and users ...</p>;
    }

    if (hasErrors || usersState.hasErrors) {
      return <p>Cannot display recipes and users...</p>;
    }

    return recipes.map((recipe, index) => (
      <div key={recipe.idMeal} className="tile">
        <h2>{recipe.strMeal}</h2>
        <img src={recipe.strMealThumb} alt="A good meal thumb" />
        <p>{usersState.users.length > 0 ? usersState.users[index].name : usersState.users.name}</p>
      </div>
    ));
  };

  useEffect(() => {
    dispatch(fetchRecipes());
    dispatch(fetchUsers());
  }, []);

  return (
    <section>
      <h1>Recipes</h1>
      <button type="button" onClick={async () => dispatch(fetchOneUserById(3))}>Fetch one user!</button>
      <div className="content">{renderRecipes()}</div>
    </section>
  );
}

export default App;
