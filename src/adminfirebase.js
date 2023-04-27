/* eslint-disable */
import { auth, db, storage } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { v4 } from "uuid";
import { collection, query, where, addDoc,getDocs, } from "firebase/firestore";

// login in admin only
export const adminlogin = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

//save image to database and download it
export const getData = async (data) => {
  const imgRef = ref(storage, `images/${data.image + v4()}`);
  const productRef = collection(db, "productDetails");
  let result;
  await uploadBytes(imgRef, data.image)
    .then((res) => {
      console.log(res);

    })
    .catch((err) => {
      console.log(err);
    });

  await getDownloadURL(imgRef)
    .then(async (res) => {
      console.log(res);
 
      await addDoc(productRef, {
        name: data.name,
        description: data.description,
        category: data.category,
        image: res,
        price: data.price,
      })
        .then((res) => {
          console.log(res);
          result = res
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });

    return  result;
};


export const getCategory = async ( bespoke,
  bridal,
  asoebi,
  muslim,
  fabrics,
  cooperate) => {
  const queryUnisex = query(
    collection(db, "productDetails"),
    where("category", "==", "Unisex Bespoke")
  );
  await getDocs(queryUnisex).then((res) => {
    console.log(res.docs);
    res.docs.forEach((doc) => {
      const { fields } = doc._document.data.value.mapValue;
      console.log(fields);
      bespoke.push(fields)
    });
  });
  const queryBride = query(
    collection(db, "productDetails"),
    where("category", "==", "Bridal wears")
  );
  await getDocs(queryBride).then((res) => {
    console.log(res.docs);
    res.docs.forEach((doc) => {
      const { fields } = doc._document.data.value.mapValue;
      console.log(fields);
      bridal.push(fields)
    });
  });
  const queryAsoebi = query(
    collection(db, "productDetails"),
    where("category", "==", "Asoebi")
  );
  await getDocs(queryAsoebi).then((res) => {
    console.log(res.docs);
    res.docs.forEach((doc) => {
      const { fields } = doc._document.data.value.mapValue;
      console.log(fields);
      asoebi.push(fields)
    });
  });
  const queryCooperate = query(
    collection(db, "productDetails"),
    where("category", "==", "Cooperate")
  );
  await getDocs(queryCooperate).then((res) => {
    console.log(res.docs);
    res.docs.forEach((doc) => {
      const { fields } = doc._document.data.value.mapValue;
      console.log(fields);
      cooperate.push(fields)
    });
  });
  const queryMuslimah = query(
    collection(db, "productDetails"),
    where("category", "==", "Muslimah")
  );
  await getDocs(queryMuslimah).then((res) => {
    console.log(res.docs);
    res.docs.forEach((doc) => {
      const { fields } = doc._document.data.value.mapValue;
      console.log(fields);
      muslim.push(fields)
    });
  });
  const queryfabrics = query(
    collection(db, "productDetails"),
    where("category", "==", "Fabrics")
  );
  await getDocs(queryfabrics).then((res) => {
    console.log(res.docs);
    res.docs.forEach((doc) => {
      const { fields } = doc._document.data.value.mapValue;
      console.log(fields);
      fabrics.push(fields)
    });
  });

  
}