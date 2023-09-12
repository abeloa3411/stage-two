import Person from "./personModel.js";

export const getPerson = async (req, res) => {
  try {
    const person = await Person.find({});

    res.status(200).json(person);
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};

export const createPerson = async (req, res) => {
  const { name, age, track } = req.body;

  if (!name && typeof name !== "string") {
    res.status(400).json({ msg: "please check your name." });
  }

  try {
    const newPerson = new Person({
      name,
      age,
      track,
    });

    const savedPerson = await newPerson.save();

    res.status(200).json(savedPerson);
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};

export const deletePerson = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPerson = await Person.findOneAndDelete({ _id: id });

    res.status(200).json(deletedPerson);
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};

export const updatePerson = async (req, res) => {
  const { id } = req.params;

  const { name } = req.body;

  const data = {
    name,
  };

  if (!name && typeof name !== "string") {
    res.status(400).json({ msg: "please check your name." });
  }

  try {
    const updated = Person.findOneAndUpdate({ _id: id }, data);

    res.status(200).json(updated);
  } catch (error) {
    res.status(400).send({ msg: "the person has been updated" });
  }
};

export const getSinglePerson = (req, res) => {
  const { id } = req.params;

  try {
    const person = Person.findOne({ _id: id });

    res.status(200).json(person);
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};
