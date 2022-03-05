import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
      userName
      email
      accountBalance
      Choices {
        nominee
      }
      Friends {
        userName
      }
    }
  }
`;

export const QUERY_PICTURE = gql`
  {
    nominees {
      picture {
        nominees
      }
    }
  }
`;

export const QUERY_DIRECTOR = gql`
  {
    nominees {
      director {
        nominees
      }
    }
  }
`;

export const QUERY_SUPPORTING_ACTOR = gql`
  {
    nominees {
      supportingactor {
        nominees
      }
    }
  }
`;

export const QUERY_ACTOR = gql`
  {
    nominees {
      actor {
        nominees
      }
    }
  }
`;

export const QUERY_ACTRESS = gql`
  {
    nominees {
      actress {
        nominees
      }
    }
  }
`;

export const QUERY_SUPPORTING_ACTRESS = gql`
  {
    nominees {
      supportingactress {
        nominees
      }
    }
  }
`;

export const QUERY_ANIMATED_FEATURE_FILM = gql`
  {
    nominees {
      animatedfeaturefilm {
        nominees
      }
    }
  }
`;

export const QUERY_ANIMATED_SHORT_FILM = gql`
  {
    nominees {
      animatedshortfilm {
        nominees
      }
    }
  }
`;

export const QUERY_CINEMATOGRAPHY = gql`
  {
    nominees {
      cinematography {
        nominees
      }
    }
  }
`;

export const QUERY_COSTUME_DESIGN = gql`
  {
    nominees {
      costumedesign {
        nominees
      }
    }
  }
`;

export const QUERY_DOCUMENTARY_FEATURE = gql`
  {
    nominees {
      documentaryfeature {
        nominees
      }
    }
  }
`;

export const QUERY_DOCUMENTARY_SHORT_SUBJECT = gql`
  {
    nominees {
      documentaryshortsubject {
        nominees
      }
    }
  }
`;

export const QUERY_FILM_EDITING = gql`
  {
    nominees {
      filmediting {
        nominees
      }
    }
  }
`;

export const QUERY_INTERNATIONAL_FEATURE_FILM = gql`
  {
    nominees {
      internationalfeaturefilm {
        nominees
      }
    }
  }
`;

export const QUERY_LIVE_ACTION_SHORT_FILM = gql`
  {
    nominees {
      liveactionshortfilm {
        nominees
      }
    }
  }
`;

export const QUERY_MAKEUP = gql`
  {
    nominees {
      makeup {
        nominees
      }
    }
  }
`;

export const QUERY_ORIGINAL_SCORE = gql`
  {
    nominees {
      originalscore {
        nominees
      }
    }
  }
`;

export const QUERY_ORIGINAL_SONG = gql`
  {
    nominees {
      originalsong {
        nominees
      }
    }
  }
`;

export const QUERY_PRODUCTION_DESIGN = gql`
  {
    nominees {
      productiondesign {
        nominees
      }
    }
  }
`;

export const QUERY_SOUND = gql`
  {
    nominees {
      sound {
        nominees
      }
    }
  }
`;

export const QUERY_VISUAL_EFFECTS = gql`
  {
    nominees {
      visualeffects {
        nominees
      }
    }
  }
`;

export const QUERY_ADAPTED_SCREENPLAY = gql`
  {
    nominees {
      adaptedscreenplay {
        nominees
      }
    }
  }
`;

export const QUERY_ORIGINAL_SCREENPLAY = gql`
  {
    nominees {
      originalscreenplay {
        nominees
      }
    }
  }
`;

// export const QUERY_PRODUCTS = gql`
//   query getProducts($category: ID) {
//     products(category: $category) {
//       _id
//       name
//       description
//       price
//       quantity
//       image
//       category {
//         _id
//       }
//     }
//   }
// `;

// export const QUERY_CHECKOUT = gql`
//   query getCheckout($products: [ID]!) {
//     checkout(products: $products) {
//       session
//     }
//   }
// `;

// export const QUERY_ALL_PRODUCTS = gql`
//   {
//     products {
//       _id
//       name
//       description
//       price
//       quantity
//       category {
//         name
//       }
//     }
//   }
// `;

// export const QUERY_CATEGORIES = gql`
//   {
//     categories {
//       _id
//       name
//     }
//   }
// `;

// export const QUERY_USER = gql`
//   {
//     user {
//       firstName
//       lastName
//       orders {
//         _id
//         purchaseDate
//         products {
//           _id
//           name
//           description
//           price
//           quantity
//           image
//         }
//       }
//     }
//   }
// `;
