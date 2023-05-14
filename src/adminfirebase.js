/* eslint-disable */
import { auth, db, storage } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import {
  collection,
  query,
  where,
  addDoc,
  getDocs,
  setDoc,
  getDoc,
  doc,
  getFirestore,
  deleteDoc,
} from "firebase/firestore";

// login in admin only
export const adminlogin = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

//save image to database and download it
export const getData = async (data) => {
  const { image } = data;
  const { first, second, third, forth } = image;
 console.log('this is the image data', image)
  //console.log('this is',data.editted)
  let success;
  const result = {};

if (first.isEdit) {
    const imgRef = ref(storage, `images/${first.img + v4()}`);
  
    await uploadBytes(imgRef, first.img)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  
    await getDownloadURL(imgRef)
      .then((res) => {
        console.log(res);
        result['first'] = res
      })
      .catch((err) => {
        console.log(err);
      });
  }

   if (second.isEdit)
   { const imgRefS = ref(storage, `images/${second.img + v4()}`);
  
    await uploadBytes(imgRefS, second.img)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  
    await getDownloadURL(imgRefS)
      .then((res) => {
        console.log(res);
        result['second'] = res
      })
      .catch((err) => {
        console.log(err);
      });}
  
if (third.isEdit) {    const imgRefT = ref(storage, `images/${third.img + v4()}`);
  
    await uploadBytes(imgRefT, third.img)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  
    await getDownloadURL(imgRefT)
      .then((res) => {
        console.log(res);
        result['third'] = res
      })
      .catch((err) => {
        console.log(err);
      });}
   
   if (forth.isEdit){ const imgRefF = ref(storage, `images/${forth.img + v4()}`);
  
    await uploadBytes(imgRefF, forth.img)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  
    await getDownloadURL(imgRefF)
      .then((res) => {
        console.log(res);
        result['forth'] = res;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
      console.log(result);

  if (data.id) {
    console.log("from data id", data.id)
    const docRef = doc(db, "productDetails", data.id);
    const myImages = Object.values({
        first: first.isEdit ? result.first : first.img,
        second: second.isEdit ? result.second : second.img,
        third: third.isEdit ? result.third : third.img,
        forth: forth.isEdit ? result.forth : forth.img,
      })

      const filterImage = Object.values(myImages).filter((val) => val !== undefined)
     const payload = {
      name: data.name,
      description: data.description,
      category: data.category,
      image: filterImage,
      price: data.price,
      createdAt: new Date().getTime(),
    };

    if (myImages) {
      console.log(myImages)
      console.log(payload)
    
    }

    setDoc(docRef, payload, { merge: true })
      .then((docRef) => {
        console.log("Entire Document has been updated successfully");
        success = docRef;
      })
      .catch((error) => {
        console.log(error);
      });

    return success;
  } else {
   
   // const imgArray = [first, second, third, forth];
   
    const productRef = collection(db, "productDetails");
    //let result;
    
    const myImages = Object.values(result).filter((val) => val !== undefined)

    await addDoc(productRef, {
      name: data.name,
      description: data.description,
      category: data.category,
      image: myImages,
      price: data.price,
      createdAt: new Date().getTime(),
    })
      .then((res) => {
        console.log(res);
        success = res;
      })
      .catch((err) => {
        console.log(err);
      });

    return success;
  }
};

/// getting docs

export const getCategory = async (
  bespoke,
  bridal,
  asoebi,
  muslim,
  fabrics,
  cooperate
) => {
  const queryUnisex = query(
    collection(db, "productDetails"),
    where("category", "==", "Unisex Bespoke")
  );

  console.log("from env file", process.env.VUE_APP_MESSAGING_ID)
  await getDocs(queryUnisex).then((res) => {
    console.log(res.docs);
    res.docs.forEach((doc) => {
      const { fields } = doc._document.data.value.mapValue;
      const { category, description, createdAt, name, price, image } = fields;
      const { values } = image.arrayValue;
      console.log(values);
      const images = values.filter(
        (val) => val.stringValue !== undefined || val.stringValue !== null
      );
      bespoke.push({
        id: doc.id,
        category,
        description,
        createdAt,
        name,
        price,
        images,
      });
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
      const { category, description, createdAt, name, price, image } = fields;
     console.log(image)
      const { values } = image.arrayValue;
      console.log(values);
      const images = values.filter(
        (val) => val.stringValue !== undefined || val.stringValue !== null
      );
      bridal.push({
        id: doc.id,
        category,
        description,
        createdAt,
        name,
        price,
        images,
      });
    });

    console.log(bridal);
  });
  const queryAsoebi = query(
    collection(db, "productDetails"),
    where("category", "==", "Asoebi")
  );
  await getDocs(queryAsoebi).then((res) => {
    console.log(res.docs);
    res.docs.forEach((doc) => {
      const { fields } = doc._document.data.value.mapValue;
      const { category, description, createdAt, name, price, image } = fields;
      const { values } = image.arrayValue;
      console.log(values);
      const images = values.filter(
        (val) => val.stringValue !== undefined || val.stringValue !== null
      );
      asoebi.push({
        id: doc.id,
        category,
        description,
        createdAt,
        name,
        price,
        images,
      });
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
      const { category, description, createdAt, name, price, image } = fields;
      const { values } = image.arrayValue;
      console.log(values);
      const images = values.filter(
        (val) => val.stringValue !== undefined || val.stringValue !== null
      );
      cooperate.push({
        id: doc.id,
        category,
        description,
        createdAt,
        name,
        price,
        images,
      });
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
      const { category, description, createdAt, name, price, image } = fields;
      const { values } = image.arrayValue;
      console.log(values);
      const images = values.filter(
        (val) => val.stringValue !== undefined || val.stringValue !== null
      );
      muslim.push({
        id: doc.id,
        category,
        description,
        createdAt,
        name,
        price,
        images,
      });
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
      const { category, description, createdAt, name, price, image } = fields;
      const { values } = image.arrayValue;
      console.log(values);
      const images = values.filter(
        (val) => val.stringValue !== undefined || val.stringValue !== null
      );
      fabrics.push({
        id: doc.id,
        category,
        description,
        createdAt,
        name,
        price,
        images,
      });
    });
  });
};

// check out

export const sendToAdmin = async (data) => {
  const productRef = collection(db, "checkout");
  let result;
  console.log(data)

  await addDoc(productRef, data)
    .then((res) => {
      console.log(res);

      result = res;
    })
    .catch((err) => {
      console.log(err);
    });

  return result;
};

///delete item
export const deleteFromCat = async (id) => {
  let result;

  await deleteDoc(doc(db, "productDetails", id))
    .then((res) => {
      console.log(res);

      result = res;
    })
    .catch((er) => {
      console.log(er);
    });

  return result;
};

///update existing doc
export const getExistingDoc = async (id, collection) => {
  const docRef = doc(db, collection, id);
  let result;
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log(docSnap.data());

      result = docSnap.data();
    } else {
      console.log("Document does not exist");
    }
  } catch (error) {
    console.log(error);
  }

  return result;
};


