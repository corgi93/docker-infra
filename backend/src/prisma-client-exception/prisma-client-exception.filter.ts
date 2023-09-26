import { ArgumentsHost, Catch } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Prisma } from '@prisma/client';

// PrismaClientKnownRequestError 데코레이터 추가
@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter extends BaseExceptionFilter {
    catch(
        exception: Prisma.PrismaClientKnownRequestError,
        host: ArgumentsHost,
    ) {
        console.error(exception.message); // 디버깅용 error log

        // default 500 error code
        super.catch(exception, host);
    }
}

@Catch(NotFoundException)
export class NotFoundException extends BaseExceptionFilter {
    catch(exception: any, host: ArgumentsHost): void {
        console.error(exception.message);

        // default 500 error code
        super.catch(exception, host);
    }
}
