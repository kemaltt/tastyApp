import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Modal, Button } from 'react-bootstrap';

const DetailList = () => {
  const [detail, setDetail] = useState({});
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((json) => setDetail(json.meals[0]));
  }, [id]);

  const instructionsList = () => {
    const instArr = detail.strInstructions.split(".");
    instArr.pop();

    const instlist = instArr.map((elt, i) => (
      <li key={i} className="instructionsList">
        {elt}.
      </li>
    ));
    return <ul style={{ fontSize: "1.2rem" }}>{instlist}</ul>;
  };

  const ingredientsList = () => {
    let ingredients = [];
    let measures = [];
    for (let i = 1; i < 21; i++) {
      let requestIngredient = "strIngredient" + i;

      let requestMeasure = "strMeasure" + i;
      let ingredient = detail[requestIngredient];
      let measure = detail[requestMeasure];

      if (ingredient && ingredient !== "") {
        ingredients.push(ingredient);
      }
      if (measure && measure !== "") {
        measures.push(measure);
      }
    }

    const measuresInstructions = measures.map((item, i) => (
      <h3 key={i}>
        {item} {ingredients[i]}
      </h3>
    ));
    return <div className="ingredientsDiv">{measuresInstructions}</div>;
  };

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <section className="detailListContainer">
      <div>
        <img src={detail.strMealThumb} alt="Alt" />
        <div className="mealDescription">
          <span> Category :{detail.strCategory}</span>
          <span>Area :{detail.strArea}</span>
        </div>
        <div className="descriptionContainer">
          <div>
            <h1>{detail.strMeal}</h1>
            {detail.strInstructions ? instructionsList() : null}
          </div>
          <div>
            <h1>Ingredients</h1>

            {detail.strInstructions ? ingredientsList() : null}

            <button onClick={handleShow}>Watch on YouTube</button>
          </div>
        </div>

        {/* Bootstrap YouTube Modal */}
        <Modal show={showModal} onHide={handleClose} size="lg" centered>
          <Modal.Header closeButton style={{ backgroundColor: '#1a1a1a', borderBottom: 'none' }}>
            <Modal.Title style={{ color: '#fff', fontSize: '1.2rem' }}>
              🎬 {detail.strMeal} - Recipe Video
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ padding: 0, backgroundColor: '#000' }}>
            <div className="ratio ratio-16x9">
              <iframe
                title="YouTube video player"
                className="rounded"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                src={
                  detail.strYoutube
                    ? `https://www.youtube.com/embed/${detail.strYoutube.slice(32)}`
                    : null
                }
              />
            </div>
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: '#1a1a1a', borderTop: 'none' }}>
            <Button variant="outline-light" onClick={handleClose}>
              Close Video
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </section>
  );
};

export default DetailList;
