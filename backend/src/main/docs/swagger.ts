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
        url: 'http://localhost:3333',
        description: 'Development'
      }
    ],
    paths: {
      '/tasks': {
        post: {
          tags: ['Tasks'],
          summary: 'Criar tarefa',
          description: 'Permite a criação de uma nova tarefa.',
          operationId: 'create-task',
          parameters: [],
          requestBody: {
            description: '',
            content: {
              'application/json': {
                schema: {
                  allOf: [
                    {
                      $ref: '#/components/schemas/create-task-request'
                    },
                    {
                      example: {
                        title: 'Fazer compras',
                        description: 'Fazer compras de inicio de mês no supermercado.'
                      }
                    }
                  ]
                },
                example: {
                  name: 'Fazer compras',
                  description: 'Fazer compras de inicio de mês no supermercado.'
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
              basicAuth: []
            }
          ]
        },
        get: {
          tags: ['Tasks'],
          summary: 'Listar tarefas',
          description: 'Lista todas as Tasks disponíveis.',
          operationId: 'list-tasks',
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
              basicAuth: []
            }
          ]
        }
      },
      '/tasks/{TaskId}': {
        get: {
          tags: ['Tasks'],
          summary: 'Encontrar tarefa',
          description: 'Busca detalhes de uma tarefa específica pelo ID.',
          operationId: 'find-tasks',
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
              basicAuth: []
            }
          ]
        },
        delete: {
          tags: ['Tasks'],
          summary: 'Excluir tarefa',
          description: 'Remove uma tarefa específica pelo ID.',
          operationId: 'delete-tasks',
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
              basicAuth: []
            }
          ]
        },
        patch: {
          tags: ['Tasks'],
          summary: 'Atualizar tarefa',
          description: 'Atualiza uma tarefa específica pelo ID.',
          operationId: 'update-tasks',
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
                    { $ref: '#/components/schemas/update-task-request' },
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
              basicAuth: []
            }
          ]
        }
      },
      'task/{TaskId}/complete': {
        post: {
          tags: ['Tasks'],
          summary: 'Completar tarefa',
          description: 'Marca uma tarefa como concluída pelo ID',
          operationId: 'complete-tasks',
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
                    { $ref: '#/components/schemas/complete-task-request' },
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
              basicAuth: []
            }
          ]
        }
      }
    },
    components: {
      securitySchemes: {
        basicAuth: {
          type: 'http',
          scheme: 'basic'
        }
      },
      schemas: {
        'create-task-request': {
          title: 'create-task-request',
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
        'update-task-request': {
          title: 'update-task-request',
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
        },
        'complete-task-request': {
          title: 'complete-task-request',
          type: 'object',
          properties: {
            completed: {
              type: 'boolean'
            }
          },
          example: {
            completed: true
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
