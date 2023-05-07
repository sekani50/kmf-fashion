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
  const {image} = data
  const {first, second, third, forth} = image
  const imgArray = [first, second, third, forth]
  const result = [];
  let success;

  const imgRef =  ref(storage, `images/${first + v4()}`);

    await uploadBytes(imgRef, first)
    .then((res) => {
      console.log(res);

    })
    .catch((err) => {
      console.log(err);
    });

  await getDownloadURL(imgRef)
    .then( (res) => {
      console.log(res);
      result.push(res)
 

    })
    .catch((err) => {
      console.log(err);
    });

    const imgRefS =  ref(storage, `images/${second + v4()}`);

    await uploadBytes(imgRefS, second)
    .then((res) => {
      console.log(res);

    })
    .catch((err) => {
      console.log(err);
    });

  await getDownloadURL(imgRefS)
    .then( (res) => {
      console.log(res);
      result.push(res)
 

    })
    .catch((err) => {
      console.log(err);
    });


    const imgRefT =  ref(storage, `images/${third + v4()}`);

    await uploadBytes(imgRefT, third)
    .then((res) => {
      console.log(res);

    })
    .catch((err) => {
      console.log(err);
    });

  await getDownloadURL(imgRefT)
    .then( (res) => {
      console.log(res);
      result.push(res)
 

    })
    .catch((err) => {
      console.log(err);
    });


    const imgRefF =  ref(storage, `images/${forth + v4()}`);

    await uploadBytes(imgRefF, forth)
    .then((res) => {
      console.log(res);

    })
    .catch((err) => {
      console.log(err);
    });

  await getDownloadURL(imgRefF)
    .then( (res) => {
      console.log(res);
      result.push(res)
 

    })
    .catch((err) => {
      console.log(err);
    });


  /* 
    for (let img in imgArray) {

    const imgRef =  ref(storage, `images/${img + v4()}`);

    await uploadBytes(imgRef, img)
    .then((res) => {
      console.log(res);

    })
    .catch((err) => {
      console.log(err);
    });

  await getDownloadURL(imgRef)
    .then( (res) => {
      console.log(res);
      result.push(res)
 

    })
    .catch((err) => {
      console.log(err);
    });

  }
  
  */

  console.log(result)
  
  const productRef = collection(db, "productDetails");
  //let result;

    await addDoc(productRef, {
      name: data.name,
      description: data.description,
      category: data.category,
      image: result,
      price: data.price,
    })
      .then((res) => {
        console.log(res);
        success = res
      })
      .catch((err) => {
        console.log(err);
      });

    return  success;
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