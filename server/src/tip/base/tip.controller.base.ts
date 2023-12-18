/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { TipService } from "../tip.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TipCreateInput } from "./TipCreateInput";
import { Tip } from "./Tip";
import { TipFindManyArgs } from "./TipFindManyArgs";
import { TipWhereUniqueInput } from "./TipWhereUniqueInput";
import { TipUpdateInput } from "./TipUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TipControllerBase {
  constructor(
    protected readonly service: TipService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Tip })
  @nestAccessControl.UseRoles({
    resource: "Tip",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createTip(@common.Body() data: TipCreateInput): Promise<Tip> {
    return await this.service.createTip({
      data: {
        ...data,

        listing: {
          connect: data.listing,
        },

        user: {
          connect: data.user,
        },
      },
      select: {
        createdAt: true,
        id: true,

        listing: {
          select: {
            id: true,
          },
        },

        tripinfo: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Tip] })
  @ApiNestedQuery(TipFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Tip",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async tips(@common.Req() request: Request): Promise<Tip[]> {
    const args = plainToClass(TipFindManyArgs, request.query);
    return this.service.tips({
      ...args,
      select: {
        createdAt: true,
        id: true,

        listing: {
          select: {
            id: true,
          },
        },

        tripinfo: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Tip })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Tip",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async tip(@common.Param() params: TipWhereUniqueInput): Promise<Tip | null> {
    const result = await this.service.tip({
      where: params,
      select: {
        createdAt: true,
        id: true,

        listing: {
          select: {
            id: true,
          },
        },

        tripinfo: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Tip })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Tip",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateTip(
    @common.Param() params: TipWhereUniqueInput,
    @common.Body() data: TipUpdateInput
  ): Promise<Tip | null> {
    try {
      return await this.service.updateTip({
        where: params,
        data: {
          ...data,

          listing: {
            connect: data.listing,
          },

          user: {
            connect: data.user,
          },
        },
        select: {
          createdAt: true,
          id: true,

          listing: {
            select: {
              id: true,
            },
          },

          tripinfo: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Tip })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Tip",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteTip(
    @common.Param() params: TipWhereUniqueInput
  ): Promise<Tip | null> {
    try {
      return await this.service.deleteTip({
        where: params,
        select: {
          createdAt: true,
          id: true,

          listing: {
            select: {
              id: true,
            },
          },

          tripinfo: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}