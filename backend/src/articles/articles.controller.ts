import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
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
    findOne(@Param('id') id: string) {
        // Article모델에 id필드가 Int이므로
        // + 연산자로 string id를 number로 캐스팅 해준다.
        return this.articlesService.findOne(+id);
    }

    @Patch(':id')
    @ApiOkResponse({ type: ArticleEntity })
    update(
        @Param('id') id: string,
        @Body() updateArticleDto: UpdateArticleDto,
    ) {
        return this.articlesService.update(+id, updateArticleDto);
    }

    @Delete(':id')
    @ApiOkResponse({ type: ArticleEntity })
    remove(@Param('id') id: string) {
        return this.articlesService.remove(+id);
    }
}
