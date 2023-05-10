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
  const imgArray = [first, second, third, forth];
  const result = [];
  let success;

  const imgRef = ref(storage, `images/${first + v4()}`);

  await uploadBytes(imgRef, first)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  await getDownloadURL(imgRef)
    .then((res) => {
      console.log(res);
      result.push(res);
    })
    .catch((err) => {
      console.log(err);
    });

  const imgRefS = ref(storage, `images/${second + v4()}`);

  await uploadBytes(imgRefS, second)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  await getDownloadURL(imgRefS)
    .then((res) => {
      console.log(res);
      result.push(res);
    })
    .catch((err) => {
      console.log(err);
    });

  const imgRefT = ref(storage, `images/${third + v4()}`);

  await uploadBytes(imgRefT, third)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  await getDownloadURL(imgRefT)
    .then((res) => {
      console.log(res);
      result.push(res);
    })
    .catch((err) => {
      console.log(err);
    });

  const imgRefF = ref(storage, `images/${forth + v4()}`);

  await uploadBytes(imgRefF, forth)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  await getDownloadURL(imgRefF)
    .then((res) => {
      console.log(res);
      result.push(res);
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

  console.log(result);

  if (data.id) {
    const docRef = doc(db, "productDetails", data.id);

    const payload = {
      name: data.name,
      description: data.description,
      category: data.category,
      image: result,
      price: data.price,
      createdAt: new Date().getTime(),
      
    };
    
    setDoc(docRef, payload, { merge:true })
    .then(docRef => {
        console.log("Entire Document has been updated successfully");
        success = docRef;
    })
    .catch(error => {
        console.log(error);
    })

    return success
  }
else {
  const productRef = collection(db, "productDetails");
  //let result;

  await addDoc(productRef, {
    name: data.name,
    description: data.description,
    category: data.category,
    image: result,
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
  await getDocs(queryUnisex).then((res) => {
    console.log(res.docs);
    res.docs.forEach((doc) => {
      const { fields } = doc._document.data.value.mapValue;
      console.log(fields);
      bespoke.push({ id: doc.id, ...fields });
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
      bridal.push({ id: doc.id, ...fields });
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
      console.log(fields);
      asoebi.push({ id: doc.id, ...fields });
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
      cooperate.push({ id: doc.id, ...fields });
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
      muslim.push({ id: doc.id, ...fields });
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
      fabrics.push({ id: doc.id, ...fields });
    });
  });
};

// check out

export const sendToAdmin = async (data) => {
  const productRef = collection(db, "checkout");
  let result;

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
export const getExistingDoc = async (id) => {
  const docRef = doc(db, "productDetails", id);
let result
  try {
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()) {
        console.log(docSnap.data());

        result = docSnap.data();
    } else {
        console.log("Document does not exist")
    }

} catch(error) {
    console.log(error)
}

return result
}

export const updateData = () => {
  const docRef = doc(db, "cities", "p4eZc05QV43InigxALJ");

const data = {
  
};

setDoc(docRef, data)
.then(docRef => {
    console.log("Entire Document has been updated successfully");
})
.catch(error => {
    console.log(error);
})

}
