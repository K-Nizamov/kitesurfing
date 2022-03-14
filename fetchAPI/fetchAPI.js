

const server = 'https://dev.meta365.eu/graphql/'


async function fetchAPI(query, { variables } = {}) {

  const headers = { "Content-Type": "application/json" }

  const res = await fetch(server, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables })
  })

  const json = await res.json()

  if (json.errors) {
    console.log(json.errors);
    console.log("error details", query, variables);
  }

  return json.data
}

export async function getAllInstructors() {
  const data = await fetchAPI(
    `
    query allInstructors {
      instructors {
        edges {
          node {
            title
            slug
            content
            atributes {
              nodes {
                slug
                description
              }
            }
            languages {
              nodes {
                slug
                description
              }
            }
            postTypeInstructor {
              license
              location
              schedule
              gallery {
                image {
                  mediaItemUrl
                }
              }
            }
          }
        }
      }
    }   
           `
  )
  return data.instructors.edges
}

export async function getAllPostsSlug() {

  const data = await fetchAPI(
    `
    query allPostsSlug {
      instructors {
        nodes {
          slug
        }
      }
    }
    `
  )

  return data.instructors.nodes
}

export async function getInstructor(slug) {
  const data = await fetchAPI(
    `
    query getPost($id:ID!,$idType:InstructorIdType!) {
      instructor(id:$id, idType: $idType) {
        title
        slug
        content
        atributes {
          nodes {
            slug
            description
          }
        }
        languages {
          nodes {
            slug
            description
          }
        }
        postTypeInstructor {
          license
          location
          schedule
          gallery {
            image {
              mediaItemUrl
            }
          }
        }
      }
    }
    `,
    {
      variables: {
        id: slug,
        idType: "SLUG"
      }
    }
  )
  return data.instructor
}