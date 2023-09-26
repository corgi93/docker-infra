import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    ParseIntPipe,
    // Error Handling
    NotFoundException,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ArticleEntity } from './entities/article.entity';

@Controller('articles')
@ApiTags('articles') // swagger 그룹화
export class ArticlesController {
    constructor(private readonly articlesService: ArticlesService) {}

    @Post()
    @ApiCreatedResponse({ type: ArticleEntity })
    create(@Body() createArticleDto: CreateArticleDto) {
        return this.articlesService.create(createArticleDto);
    }

    // 게시되지 않은 기사들을 가져옴
    @Get('drafts')
    @ApiOkResponse({ type: ArticleEntity, isArray: true })
    findDrafts() {
        return this.articlesService.findDrafts();
    }

    @Get()
    @ApiOkResponse({ type: ArticleEntity, isArray: true })
    findAll() {
        return this.articlesService.findAll();
    }

    @Get(':id')
    @ApiOkResponse({ type: ArticleEntity })
    async findOne(@Param('id', ParseIntPipe) id: number) {
        // ParseIntPipe로 NestJS파이프로 id를 자동으로 숫자로 변환할 수 있다
        // (Swagger도 string -> number로 변환되어 나타남)
        const article = await this.articlesService.findOne(id);
        if (!article) {
            throw new NotFoundException(`Article with ${id} does not exist`);
        }
        return article;
    }

    @Patch(':id')
    @ApiOkResponse({ type: ArticleEntity })
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateArticleDto: UpdateArticleDto,
    ) {
        return this.articlesService.update(id, updateArticleDto);
    }

    @Delete(':id')
    @ApiOkResponse({ type: ArticleEntity })
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.articlesService.remove(id);
    }
}
