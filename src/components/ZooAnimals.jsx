

// create a zooAnimals component
const ZooAnimals = ({zooAnimals}) => {
    // console.log(zooAnimals)
    return (
        <div className="animal-list">
        <div className="animal-list_title">
          <h3>Zoo Animals</h3>
          <div className="animal-list_ animals">
            {zooAnimals.map((animal) => (
              <li key={animal}>{animal}</li>
            ))}
          </div>
        </div>
      </div>
    );
};
// export that components
export default ZooAnimals;