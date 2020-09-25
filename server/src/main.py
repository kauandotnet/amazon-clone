import graphene
from typing import Optional
from fastapi import FastAPI
from pydantic import BaseModel
from starlette.graphql import GraphQLApp


class Query(graphene.ObjectType):
    hello = graphene.String(name=graphene.String(default_value="stranger"))

    def resolve_hello(self, info, name):
        return "Hello " + name


app = FastAPI()
app.add_route("/graphql", GraphQLApp(schema=graphene.Schema(query=Query)))

# if __name__ == "__main__":
#     uvicorn.run("app.main:app", host="0.0.0.0", port=app_config.PORT,
#                 reload=app_config.APP_RELOAD)
