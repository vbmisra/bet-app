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

export const QUERY_USERS = gql`
  {
    users {
      userName
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
    picture {
      nominees
    }
    
  }
`;

export const QUERY_DIRECTOR = gql`
  {
      director {
        nominees
      }
    
  }
`;

export const QUERY_SUPPORTING_ACTOR = gql`
  {
      supportingactor {
        nominees
      }
    
  }
`;

export const QUERY_ACTOR = gql`
  {
      actor {
        nominees
      }
    
  }
`;

export const QUERY_ACTRESS = gql`
  {
      actress {
        nominees
      }
    
  }
`;

export const QUERY_SUPPORTING_ACTRESS = gql`
  {
      supportingactress {
        nominees
      }
    
  }
`;

export const QUERY_ANIMATED_FEATURE_FILM = gql`
  {
      animatedfeaturefilm {
        nominees
      }
    
  }
`;

export const QUERY_ANIMATED_SHORT_FILM = gql`
  {
      animatedshortfilm {
        nominees
      }
    
  }
`;

export const QUERY_CINEMATOGRAPHY = gql`
  {
      cinematography {
        nominees
      }
    
  }
`;

export const QUERY_COSTUME_DESIGN = gql`
  {
      costumedesign {
        nominees
      }
    
  }
`;

export const QUERY_DOCUMENTARY_FEATURE = gql`
  {
      documentaryfeature {
        nominees
      }
    
  }
`;

export const QUERY_DOCUMENTARY_SHORT_SUBJECT = gql`
  {
      documentaryshortsubject {
        nominees
      }
    
  }
`;

export const QUERY_FILM_EDITING = gql`
  {
      filmediting {
        nominees
      }
    
  }
`;

export const QUERY_INTERNATIONAL_FEATURE_FILM = gql`
  {
      internationalfeaturefilm {
        nominees
      }
    
  }
`;

export const QUERY_LIVE_ACTION_SHORT_FILM = gql`
  {
      liveactionshortfilm {
        nominees
      }
    
  }
`;

export const QUERY_MAKEUP = gql`
  {
      makeup {
        nominees
      }
    
  }
`;

export const QUERY_ORIGINAL_SCORE = gql`
  {
      originalscore {
        nominees
      }
    
  }
`;

export const QUERY_ORIGINAL_SONG = gql`
  {
      originalsong {
        nominees
      }
    
  }
`;

export const QUERY_PRODUCTION_DESIGN = gql`
  {
      productiondesign {
        nominees
      }
    
  }
`;

export const QUERY_SOUND = gql`
  {
      sound {
        nominees
      }
    
  }
`;

export const QUERY_VISUAL_EFFECTS = gql`
  {
      visualeffects {
        nominees
      }
    
  }
`;

export const QUERY_ADAPTED_SCREENPLAY = gql`
  {
      adaptedscreenplay {
        nominees
      }
    
  }
`;

export const QUERY_ORIGINAL_SCREENPLAY = gql`
  {
      originalscreenplay {
        nominees
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
