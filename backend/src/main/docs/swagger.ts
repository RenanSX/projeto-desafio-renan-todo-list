export default {
  openapi: {
    info: {
      title: 'Desafio Backend Renan Todo List',
      contact: {
        name: 'Github',
        url: 'https://github.com/RenanSX/desafio-renan-todo-list'
      },
      version: '1.0',
      description:
        'O backend do <b>"Todo List"</b> é responsável por gerenciar as tarefas de um usuário, permitindo operações como listagem, detalhamento, criação, atualização e remoção de tarefas.'
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Development'
      },
      {
        url: 'https://desafio-renan-todo-list.herokuapp.com',
        description: 'Production'
      }
    ],
    paths: {
      '/tasks': {
        post: {
          tags: ['Tasks'],
          summary: 'create taks',
          description: 'Permite a criação de uma nova feature flag.',
          operationId: 'createtaks',
          parameters: [],
          requestBody: {
            description: '',
            content: {
              'application/json': {
                schema: {
                  allOf: [
                    {
                      $ref: '#/components/schemas/create-taskrequest'
                    },
                    {
                      example: {
                        name: 'Promoção de natal',
                        description: 'Habilita a promoção de natal do Grupo Boticário',
                        state: true
                      }
                    }
                  ]
                },
                example: {
                  name: 'Promoção de natal',
                  description: 'Habilita a promoção de natal do Grupo Boticário',
                  state: true
                }
              }
            },
            required: true
          },
          responses: {
            '200': {
              description: '',
              headers: {}
            }
          },
          deprecated: false,
          security: [
            {
              bearerAuth: []
            }
          ]
        },
        get: {
          tags: ['Tasks'],
          summary: 'list feature-flags',
          description: 'Lista todas as Tasks disponíveis.',
          operationId: 'listfeature-flags',
          parameters: [],
          responses: {
            '200': {
              description: '',
              headers: {}
            }
          },
          deprecated: false,
          security: [
            {
              bearerAuth: []
            }
          ]
        }
      },
      '/tasks/{TaskId}': {
        get: {
          tags: ['Tasks'],
          summary: 'find feature-flags',
          description: 'Busca detalhes de uma feature flag específica pelo ID.',
          operationId: 'findfeature-flags',
          parameters: [
            {
              name: 'TaskId',
              in: 'path',
              required: true,
              schema: {
                type: 'string'
              }
            }
          ],
          responses: {
            '200': {
              description: '',
              headers: {}
            }
          },
          deprecated: false,
          security: [
            {
              bearerAuth: []
            }
          ]
        },
        delete: {
          tags: ['Tasks'],
          summary: 'delete feature-flags',
          description: 'Remove uma feature flag específica pelo ID.',
          operationId: 'deletefeature-flags',
          parameters: [
            {
              name: 'TaskId',
              in: 'path',
              required: true,
              schema: {
                type: 'string'
              }
            }
          ],
          responses: {
            '200': {
              description: '',
              headers: {}
            }
          },
          deprecated: false,
          security: [
            {
              bearerAuth: []
            }
          ]
        },
        patch: {
          tags: ['Tasks'],
          summary: 'update feature-flags',
          description: 'Atualiza uma feature flag existente pelo ID.',
          operationId: 'update-flags',
          parameters: [
            {
              name: 'TaskId',
              in: 'path',
              required: true,
              schema: {
                type: 'string'
              }
            }
          ],
          requestBody: {
            description: '',
            content: {
              'application/json': {
                schema: {
                  allOf: [
                    { $ref: '#/components/schemas/update-taskrequest' },
                    {
                      example: {
                        state: false
                      }
                    }
                  ]
                },
                example: {
                  state: false
                }
              }
            },
            required: true
          },
          responses: {
            '200': {
              description: '',
              headers: {}
            }
          },
          deprecated: false,
          security: [
            {
              bearerAuth: []
            }
          ]
        }
      }
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer'
        }
      },
      schemas: {
        'create-taskrequest': {
          title: 'create-taskrequest',
          required: ['title', 'description'],
          type: 'object',
          properties: {
            title: {
              type: 'string'
            },
            description: {
              type: 'string'
            }
          },
          example: {
            name: 'Fazer compras',
            description: 'Fazer as compras do mês no supermercado'
          }
        },
        'update-taskrequest': {
          title: 'update-taskrequest',
          type: 'object',
          properties: {
            title: {
              type: 'string'
            },
            description: {
              type: 'string'
            },
            completed: {
              type: 'boolean'
            },
            editing: {
              type: 'boolean'
            }
          },
          example: {
            title: 'Fazer bolo',
            description: 'Fazer bolo para eniversário do meu primo.',
            completed: true,
            editing: true
          }
        }
      }
    },
    tags: [
      {
        name: 'Tasks',
        description:
          'O módulo Tasks é responsável pelo gerenciamento de tarefas de um usuário, permitindo operações como listagem, detalhamento, criação, atualização e remoção de tarefas.'
      }
    ]
  }
}
